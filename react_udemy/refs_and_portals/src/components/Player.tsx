import {ChangeEvent, useRef, useState} from "react";

export default function Player() {
    const [enteredName, setEnteredName] = useState<string | null>(null);

    //Get input object straight from the HTML component
    const inputName = useRef<HTMLInputElement>(null);

    function handleClick() {
        setEnteredName(inputName?.current?.value ?? null);
    }

    return (
        <section id="player">
            <h2>Welcome {enteredName ?? 'unknown'}</h2>
            <p>
                <input ref={inputName} type="text"/>
                <button onClick={handleClick}>Set Name</button>
            </p>
            {/*will change only on re-rerender*/}
            <p>{inputName?.current?.value}</p>
        </section>
    );
}
