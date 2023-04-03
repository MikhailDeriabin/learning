import ExpenseItem from './components/Expenses/ExpenseItem';
import ClickableButton from "./components/ClickableButton/ClickableButton";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const initialState = [];

function App() {
    const [displayedData, setDisplayedData] = useState(initialState);

    const addNewItemHandler = (item) => {
        setDisplayedData((previousState) => {
            return [item, ...previousState];
        });
    }

    const nothingFoundMessageP = <p>Nothing is found</p>;
    const itemsFound = displayedData.map(item => <ExpenseItem key={item.id} itemObj={item}/>);

    return (
    <div className="App">
        <NewExpense onAddItem={addNewItemHandler}/>
        <div className="expense-items">
            {displayedData.length === 0 ? (nothingFoundMessageP) : null}
            {/*remember to add unique key*/}
            {itemsFound}
        </div>

        <ClickableButton text='Lol'/>
    </div>
    );
}

export default App;