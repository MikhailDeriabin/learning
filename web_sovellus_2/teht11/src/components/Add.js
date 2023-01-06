import React, {useEffect, useState} from 'react'

const Add = (props) => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [statusPValue, setStatusPValue] = useState('');

    const isSuccess = () => {
        if(success === true){
            document.querySelector("#eventDescriptionInput").focus();
            setInputValue('');
            setStatusPValue('Note has been saved');
        } else
            setStatusPValue('');
    }

    const isError = () => {

        if(error === true) {
            setStatusPValue('Please fill all the fields');
        }else
            setStatusPValue('');
    }

    useEffect(isSuccess, [success]);
    useEffect(isError, [error]);

    const addEvent = async (event) => {
        event.preventDefault();
        if(inputValue !== ''){
            const date = new Date();
            const currentDate = date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear();

            const reqObj = {
                content : inputValue,
                date: currentDate
            }
            const reqOptions = {
                headers:{
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(reqObj)
            }

            await fetch("http://localhost:3001/notes", reqOptions);
            props.clickHandler();
            setSuccess(true);
        } else
            setError(true);

    }

    return(
        <div className="container">
            <form>
                <label htmlFor="eventDescriptionInput">Event description </label>
                <input id="eventDescriptionInput" type="text" placeholder="type a description" value={inputValue} onChange={(event)=>{
                    event.preventDefault();
                    setInputValue(event.target.value);
                }}/>
                <button onClick={addEvent}>Add event</button>
                <p id="status">{ statusPValue }</p>
        </form>
        </div>
    )
}

export default Add