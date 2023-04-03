import './ExpenseItem.css';

import Date from '../Date';

function ExpenseItem(props) {
    const {date, title, amount} = props.itemObj;

    return (
        <div className="elem-body">
            <h2>Title: {title}</h2>
            <div>
                <Date date={date} separator="."></Date>
                <p>Amount: {amount} €</p>
            </div>
        </div>
    );
}

export default ExpenseItem;