import { useEffect, useState } from "react";
import { emitter } from "../App";

type Props = {

}

export default function Counter({  }: Props) {
    const [count, setCount] = useState<number>(0);

    //Listening to events = observe
    useEffect(() => {
        const onIncrement = () => setCount(count => count+1);
        const onDecrement = () => setCount(count => count-1);

        emitter.on('inc', onIncrement);
        emitter.on('dec', onDecrement);

        //Remember to switch off the listeners when component is dismounted
        return () => {
            emitter.off('inc', onIncrement);
            emitter.off('dec', onDecrement);
        }
    }, []);

    return (
        <>
            <p>Counter: {count}</p>
        </>
    );
}