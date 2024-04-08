import {useEffect, useState} from "react";

type Props = {
    durationMs: number;
    updateSpeedMs?: number;
}
export default function ({durationMs, updateSpeedMs=10}:Props) {
    const [remainingTime, setRemainingTime] = useState<number>(durationMs);

    useEffect(() => {
        const updateProgressIntervalId = setInterval(() => {
            setRemainingTime(prevState => prevState-updateSpeedMs-5);
        }, updateSpeedMs);

        return () => {
            clearInterval(updateProgressIntervalId);
        }

    }, []);

    return(
        <progress value={remainingTime} max={durationMs}/>
    );
}