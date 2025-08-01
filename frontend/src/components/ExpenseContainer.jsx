import {useState,useEffect} from 'react';
import History from './History';
import ExpenseForm from './ExpenseForm';
import BalanceContainer from './BalanceContainer';
import axios from 'axios';

const ExpenseContainer = () => {
    const [expenses,setExpenses] = useState([]);
    const [itemToEdit, setItemToEdit] = useState(null);

    useEffect(() => {
        fetchExpenses();
    }, []);

    const fetchExpenses = async () => {
            try {
                const res = await fetch('https://expense-tracker-j0h4.onrender.com/expense');
                const data = await res.json();
                setExpenses(data);
            } catch (err) {
                console.error('Error fetching expenses:', err);
            }
    };

    const addExpense = async (title, amount) => {
        try {
            const res = await fetch('https://expense-tracker-j0h4.onrender.com/expense', { 
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({title,amount}),
            });
        if(res.ok){
            const newItem = await res.json();
            setExpenses((prev)=>[...prev,newItem]); 
        }else{
            console.error('Failed to add expense');
        }
        } catch (err) {
            console.error('Error adding expense:', err);
        }
    };

    const deleteExpense = async (id) => {
        try {
            const res = await fetch(`https://expense-tracker-j0h4.onrender.com/expense/${id}`, { 
                method:'DELETE'
            });
        if(res.ok){
            await fetchExpenses();
        }else{
            console.error('Failed to delete expense');
        }
        } catch (err) {
            console.error('Error deleting expense:', err);
        }
    };

    const editExpense = async (id, title, amount) => {
        try {
            const res = await fetch(`https://expense-tracker-j0h4.onrender.com/expense/${id}`, {
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({title,amount}),
             });
            if (res.ok){
                const newItem = await res.json();
                setExpenses(expenses.map(exp => (exp._id === id ? newItem : exp)));
                setItemToEdit(null);
            }else{
                console.error('Failed to edit expense');
            }
        } catch (err) {
            console.error('Error updating expense:', err);
        }
    };

    //console.log(itemToEdit);
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
