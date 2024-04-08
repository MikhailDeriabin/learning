import {useRef, useState} from "react";
import ResultModal, {DialogRef} from "../ResultModal/ResultModal";

type TimerChallengeProps = {
    title: string;
    targetTimeS: number;
}

export default function TimerChallenge({title, targetTimeS}: TimerChallengeProps) {
    const [timeRemainingMS, setTimeRemainingMS] = useState<number>(targetTimeS*1000);

    //Safe the var value even if the component will be re-rendered
    const timerIdRef = useRef<number>(0);

    //Get custom component HTML object
    //you have to pass it via forwardRef, see ResultModal
    //Here type of the ref is custom component custom ref, which expose only one method instead of all dialog-tag methods, this step is not necessary
    const dialogRef = useRef<DialogRef>(null);

    const timerIsActive = timeRemainingMS > 0 && timeRemainingMS < targetTimeS*1000;

    if(timeRemainingMS <= 0){
        clearInterval(timerIdRef.current);
        dialogRef.current?.showModal();
    }

    function resetTimer() {
        setTimeRemainingMS(targetTimeS*1000);
    }

    function handleStart() {
        timerIdRef.current = setInterval(() => {
            setTimeRemainingMS(prevState => prevState-10);
        }, 10);
    }
    
    function handleStop() {
        clearInterval(timerIdRef.current);
        dialogRef.current?.showModal();
    }

    return(
        <>
            <ResultModal ref={dialogRef} targetTimeS={targetTimeS} remainingTimeS={(timeRemainingMS/1000)} resetTimer={resetTimer}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTimeS} seconds
                </p>
                <p>
                    <button
                        onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? 'Stop' : 'Start'} challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : ''}>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}