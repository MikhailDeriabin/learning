import React, {ChangeEvent, FormEvent, useState} from 'react';
import './App.css';
import {IPerson} from './App.d'
import TaskList from "./components/TaskList";

function App() {
    const [person, setPerson] = useState<IPerson>({name: '', age: 0})

    function onInputChange(event: ChangeEvent<HTMLInputElement>) {
        setPerson({...person, [event.target.name]: event.target.value});
    }

    function onFormSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if(person.age>=18)
            alert(`Hello ${person.name}`);
        else
            alert(`You are too young`);

        resetPerson();
    }

    function resetPerson() {
        setPerson({name: '', age: 0})
    }

    return (
        <div className='App'>
            <form onSubmit={onFormSubmit}>
                <input name='name' type='text' placeholder='Type name' value={person.name} onChange={onInputChange}/>
                <input name='age' type='number' placeholder='Type name' value={person.age} onChange={onInputChange}/>
                <input type='submit' value='Check age'/>
            </form>
        </div>
    );
}

export default App;
