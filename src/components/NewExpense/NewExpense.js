import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {

    const [diplayAddNewExpenseBtn, setDiplayAddNewExpenseBtn] = useState(true);
    const [displayExpenseForm, setDisplayExpenseForm] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);

    }

    function addNewExpenseBtnHandler() {
        setDiplayAddNewExpenseBtn(false);
        setDisplayExpenseForm(true);
    }

    function hideDespenseForm() {
        setDiplayAddNewExpenseBtn(true);
        setDisplayExpenseForm(false);
    }

    return (
        <div className='new-expense'>
            {diplayAddNewExpenseBtn && (
                <button onClick={addNewExpenseBtnHandler}>Add New Expense</button>
            )}
            {displayExpenseForm && (
                <ExpenseForm removeExpenseForm={hideDespenseForm} onSaveExpenseData={saveExpenseDataHandler} />
            )}
        </div>
    )
}

export default NewExpense;
