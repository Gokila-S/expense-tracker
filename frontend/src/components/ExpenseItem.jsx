const ExpenseItem = (props) => {
    const { title, amount, _id } = props.expense;
    const type = amount > 0 ? "income" : "expense";

    const handleDelete = () => {
        props.deleteExpense(_id);
    }
    
    const handleEdit = () => {
        props.setItemToEdit(props.expense);
    }

    return(
        <div className ={`expense-item ${type}`}>
            <div className="expense-title">{title}</div>
            <div className="expense-amount">${amount}</div>
            <div className="edit-button">
                <button onClick={handleEdit}>Edit</button>
            </div>
            <div className="delete-button">
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}
export default ExpenseItem;