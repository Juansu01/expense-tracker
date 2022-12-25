import './ExpenseDate.css'

function ExpenseDate(props) {
    const dateObj = new Date(props.date);
    const month = dateObj.toLocaleString('en-US', { month: 'long' });
    const day = dateObj.toLocaleString('en-US', { day: '2-digit' });
    const year = dateObj.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    );
}

export default ExpenseDate;