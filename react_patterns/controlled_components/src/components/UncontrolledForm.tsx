import { createRef, FormEvent } from "react";

//Here the form is not controlled and we have to create refs in order to get values => we do not have direct access to them
type Props = {

}
export default function UncontrolledForm({ }: Props) {

    const nameInputRef = createRef<HTMLInputElement>();
    const ageInputRef = createRef<HTMLInputElement>();

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        console.log('name', nameInputRef.current?.value);
        console.log('age', ageInputRef.current?.value);
        e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="John Doe" ref={nameInputRef}/>
            <input name="age" type="number" placeholder="34" ref={ageInputRef}/>
            <input type="submit" value="Submit"/>
        </form>
    );
}