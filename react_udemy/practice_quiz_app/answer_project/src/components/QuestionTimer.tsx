import {useEffect, useState} from "react";

type Props = {
    timeoutMs: number;
    onTimout: () => void;
}

export default function QuestionTimer({timeoutMs, onTimout}: Props) {
    const [remainingTime, setRemainingTime] = useState<number>(timeoutMs);

    //when the remainingTime state changes, the setTimout will be reset => wrap it also with useEffect
    useEffect(() => {
        const timoutId = setTimeout(onTimout, timeoutMs);
        return () => clearTimeout(timoutId);
    }, [onTimout, timeoutMs]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime(prevState => prevState-10)
        }, 10);
        return () => clearInterval(intervalId);
    }, []);

    return(
        <progress id="question-time" max={timeoutMs} value={remainingTime}/>
    );
}