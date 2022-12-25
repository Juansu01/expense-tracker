import ExpensesList from './ExpensesList';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

    const [filterState, setFilterState] = useState('2020');

    function onFilterChangeHandler(selectedYear) {
        setFilterState(selectedYear);
    }

    function getYear(date) {
        const dateObj = new Date(date);
        return dateObj.getFullYear().toString();
    }

    const filteredExpenses = props.expenses.filter(expense => {
        if (filterState === 'All') {
            return expense;
        }
        return getYear(expense.date) === filterState;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filterState}
                    filterChange={onFilterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList removeExpense={props.removeExpense} expenses={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;
