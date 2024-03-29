import { useState } from "react";

function NewExpenseForm(props) {
    const {onSaveData} = props;

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault(); //prevent page reload (default behaviour of HTML forms)

        const expense = {
            id: Math.floor(Math.random() * (3 - 10000000) + 3),
            title,
            amount,
            date: new Date()
        }

        //Send data to parent elem
        onSaveData(expense);

        //using two-way binding reset fields values
        //so, we set to '' both state and value of the input at the same time
        setTitle('');
        setAmount('');
    }

    return(
        <div className="new-expense-form">
            <form onSubmit={submitHandler}>
                <label>Title: <input value={title} id="titleInput" type="text" placeholder="type title" onChange={titleChangeHandler} /></label><br/>
                <label>Amount: <input value={amount} id="amountInput" type="number" placeholder="type amount" onChange={amountChangeHandler} /></label>
                <button type="submit">Add new item</button>
            </form>
        </div>
    );
}

export default NewExpenseForm;