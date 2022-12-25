import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

    function removeExpenseHandler() {
        props.removeExpense(props.id)
    }

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                    <button className='expense-item__delete-btn' type='button' onClick={removeExpenseHandler}>Delete</button>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;