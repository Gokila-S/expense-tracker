import CurrencyContainer from "./CurrencyContainer";

const BalanceContainer = (props) => {
    const { expenses } = props;
    const incomeArr = expenses.filter(expense => expense.amount > 0);
    const expenseArr = expenses.filter((expense)=> expense.amount < 0);
    let income=0;
    let expense=0;
    incomeArr.forEach((item) => {
        income += parseFloat(item.amount);
    });
    expenseArr.forEach((item) => {
        expense += parseFloat(item.amount);
    });
    console.log(income, expense);
    return (
        <div className="balance-container">
            <CurrencyContainer type="income" title="Income" amount={income}/>
            <CurrencyContainer type="expense" title="Expense" amount={expense}/>
            <CurrencyContainer type="balance" title="Balance" amount={income+expense}/>
        </div>
    )
}
export default BalanceContainer;