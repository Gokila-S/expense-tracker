import ExpenseItem from "./ExpenseItem";

const History = (props) => {
    const {expenses,deleteExpense,setItemToEdit} = props;
    return(
        <div className="history">
            <h3>History</h3>
            {expenses.map((expense) => (
                <ExpenseItem key={expense._id} expense={expense} deleteExpense={deleteExpense} setItemToEdit={setItemToEdit}/> )
            )}
        </div>
    );
}
export default History;