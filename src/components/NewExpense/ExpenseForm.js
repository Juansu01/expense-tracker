import './ExpenseForm.css';
import { useState } from 'react';

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
    };

    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
    };

    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
    };

    function submitHandler(event) {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        if (expenseData.title && expenseData.amount && !isNaN(expenseData.date)) {
            props.onSaveExpenseData(expenseData);
            setEnteredAmount('');
            setEnteredDate('');
            setEnteredTitle('');
        } else {
            alert("Please fill all the fields!")
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input onChange={amountChangeHandler} value={enteredAmount} type='number' min="0.01" step="0.01"/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input onChange={dateChangeHandler} type='date' value={enteredDate} min="2019-01-01" max="2022-12-31"/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.removeExpenseForm}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;