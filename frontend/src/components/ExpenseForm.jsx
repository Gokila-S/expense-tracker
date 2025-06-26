import {useEffect,useState} from 'react';

const ExpenseForm = (props) => {

    const [title, setTitle] = useState(props.itemToEdit?.title||'');
    const [amount, setAmount] = useState(props.itemToEdit?.amount||0);
    const [error,setError] = useState('');

    const isEdit = props.itemToEdit;

    useEffect(()=>{
        if(props.itemToEdit){
            setTitle(props.itemToEdit.title);
            setAmount(props.itemToEdit.amount);
        }
    },[props.itemToEdit])

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!title){
            setError("Enter Title !");
            return;
        }
        if(!amount){
            setError("Enter Amount !");
            return;
        }
        if(isEdit){
            props.editExpense(props.itemToEdit._id,title,amount)
        }
        else{
            props.addExpense(title,amount);
        }
         setError("");
         setTitle("");
         setAmount(0);
         console.log(props.itemToEdit);
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    }
    const clearEdit = () => {
        props.setItemToEdit(null);
        setTitle("");
        setAmount(0);
    }
    return(
        <div className="expense-form">
            <h3>{isEdit ? "Edit Expense" : "Add New Expense"}
            </h3>
            <form onSubmit={handleSubmit}>
                <div className='errorMsg'>{error}</div>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" id="title" value={title} onChange={handleTitleChange} name="title" />
                </div>
                <div className="form-group">
                    <label>Amount</label>
                    <input type="number" id="amount" value={amount} onChange={handleAmountChange} name="amount" />
                </div>
                <button type="submit">{isEdit ? "Edit Expense":"Add Expense"}</button>
                {isEdit && <button className="clear-button" onClick={clearEdit}>Clear Edit</button>}
            </form>
        </div>
    )
}
export default ExpenseForm;