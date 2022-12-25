import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {

    if (props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found.</h2>;
    }

    return (
        <ul className="expenses-list">
            {props.expenses.map(expense =>
            <ExpenseItem
                removeExpense={props.removeExpense}
                id={expense.id}
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />
            )}
        </ul>
    )

}

export default ExpensesList;