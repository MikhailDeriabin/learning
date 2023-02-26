import ExpenseItem from './components/Expenses/ExpenseItem';

function App() {
    const receivedData = [
        { itemDate: new Date(2023, 2, 26), itemTitle: "Lol", itemAmount: 123 },
        { itemDate: new Date(2022, 10, 2), itemTitle: "Kek", itemAmount: 56.89 }
    ];
  return (
    <div className="App">
        <div className="expense-items">

        </div>
        <ExpenseItem itemObj={receivedData[0] }/>
        <ExpenseItem itemObj={receivedData[1]}/>
    </div>
  );
}

export default App;