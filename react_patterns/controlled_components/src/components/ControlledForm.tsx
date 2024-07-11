import { FormEvent, useEffect, useState } from "react";

//Here we can control the state easily and add some validations etc. Usually controlled components are more flexible 
type Props = {

}
export default function ControlledForm({ }: Props) {
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number>();

    //Kinda validation, just example
    useEffect(() => {
        if(!name)
            console.log('Name can not be empty');
    }, [name]);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="John Doe" value={name} onChange={e => setName(e.target.value)}/>
            <input name="age" type="number" placeholder="34" value={age} onChange={e => setAge(Number.parseInt(e.target.value))}/>
            <input type="submit" value="Submit"/>
        </form>
    );
}