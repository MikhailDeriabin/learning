import {ChangeEvent, FormEvent, useState} from "react";

export default function Form() {
    const [firstname, setFirstname] = useState<string>('');
    const [age, setAge] = useState<number>(0);

    function showAlert(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const message = age >= 18 ? `Hello ${firstname}` : 'You are too young';
        alert(message);
    }

    function setFirstnameHandler(e: ChangeEvent<HTMLInputElement>) {
        setFirstname(e.target.value);
    }

    function setAgeHandler(e: ChangeEvent<HTMLInputElement>) {
        setAge(Number.parseInt(e.target.value));
    }

    return (
            <div className='wrapper'>
                <form className='alert-form' onSubmit={showAlert}>
                    <input name='firstname' value={firstname} placeholder='type your firstname' type='text' onChange={setFirstnameHandler} required/>
                    <input name='age' value={age} placeholder='type your age' type='number' onChange={setAgeHandler} required/>
                    <button type='submit'>Check age</button>
                </form>
            </div>
    );
}