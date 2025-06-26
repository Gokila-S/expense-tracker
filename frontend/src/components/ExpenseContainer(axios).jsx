import {useState,useEffect} from 'react';
import History from './History';
import ExpenseForm from './ExpenseForm';
import BalanceContainer from './BalanceContainer';
import axios from 'axios';

const ExpenseContainer = () => {
    const [expenses,setExpenses] = useState([]);
    const [itemToEdit, setItemToEdit] = useState(null);

 useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const res = await axios.get('http://localhost:3000/expense');
                setExpenses(res.data);
            } catch (err) {
                console.error('Error fetching expenses:', err);
            }
        };
        fetchExpenses();
    }, []);


    const addExpense = async (title, amount) => {
        try {
            const res = await axios.post('http://localhost:3000/expense', { title, amount });
            setExpenses([...expenses, res.data]); 
        } catch (err) {
            console.error('Error adding expense:', err);
        }
    };

    const deleteExpense = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/expense/${id}`);
            setExpenses(expenses.filter(exp => exp._id !== id));
        } catch (err) {
            console.error('Error deleting expense:', err);
        }
    };

    const editExpense = async (id, title, amount) => {
        try {
            const res = await axios.put(`http://localhost:3000/expense/${id}`, { title, amount });
            setExpenses(expenses.map(exp => (exp._id === id ? res.data : exp)));
            setItemToEdit(null);
        } catch (err) {
            console.error('Error updating expense:', err);
        }
    };

    console.log(itemToEdit);
    return (
        <div className="expense-container">
            <h1>Expense Tracker</h1>
            <BalanceContainer expenses={expenses}/>
            <ExpenseForm addExpense={addExpense} itemToEdit={itemToEdit} editExpense={editExpense} setItemToEdit={setItemToEdit}/>
            <History expenses={expenses} deleteExpense={deleteExpense} setItemToEdit={setItemToEdit}/>
        </div>
    );
}
export default ExpenseContainer;