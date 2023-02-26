import './ExpenseItem.css';

import Date from '../Date';

function ExpenseItem(props) {
    const {itemDate, itemTitle, itemAmount} = props.itemObj;

    return (
        <div className="elem-body">
            <h2>Title: {itemTitle}</h2>
            <div>
                <Date date={itemDate} separator="."></Date>
                <p>Amount: {itemAmount} €</p>
            </div>
        </div>
    );
}

export default ExpenseItem;