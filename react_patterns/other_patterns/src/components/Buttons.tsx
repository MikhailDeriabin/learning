import { emitter } from "../App";

type Props = {

}

export default function Buttons({  }: Props) {
    function onIncrement() {
        //Button is clicked => event happen
        emitter.emit('inc');
    }

    function onDecrement() {
        emitter.emit('dec');
    }

    return (
        <>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </>
    );
}