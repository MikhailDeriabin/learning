import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";

function NewExpense(props) {
    const {onAddItem} = props;

    const saveExpenseDataHandler = (data) => {
        onAddItem(data);
    }

    return (
        <div>
            <NewExpenseForm onSaveData={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;