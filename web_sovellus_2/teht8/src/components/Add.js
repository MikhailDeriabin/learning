import React from 'react'


const Add = (props) => {
    const addEvent = async () => {
        const eventContentInput = document.querySelector("#eventDescriptionInput");
        const eventContent = eventContentInput.value;
        const date = new Date();
        const currentDate = date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear();

        const reqObj = {
            content : eventContent,
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
    }

    return(
        <div className="container">
            <form>
                <label htmlFor="eventDescriptionInput">Event description </label>
                <input id="eventDescriptionInput" type="text" placeholder="type a description"/>
                <button onClick={addEvent}>Add event</button>
        </form>
        </div>
    )
}

export default Add