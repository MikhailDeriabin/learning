import {useEffect, useState} from "react";

type Props = {
    maxMs: number;
    updateSpeedMs?: number;
    onEnd?: () => void;
}
export default function ProgressBar({maxMs, updateSpeedMs=10, onEnd}: Props) {
    const [timeLeft, setTimeLeft, ] = useState<number>(maxMs);

    useEffect(() => {
        const progressIntervalId = setInterval(() => {
            setTimeLeft(prevState => {
                const time = prevState-updateSpeedMs;
                if(time <= 0)
                    clearInterval(progressIntervalId);

                return time;
            });
            if(timeLeft <= 0 && onEnd)
                onEnd();
        }, updateSpeedMs);

        return () => {
            clearInterval(progressIntervalId);
        }
    }, [onEnd, updateSpeedMs, timeLeft, setTimeLeft]);

    return(
        <progress max={maxMs} value={timeLeft}/>
    );
}