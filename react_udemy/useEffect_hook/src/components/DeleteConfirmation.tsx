import {useEffect, useState} from "react";
import ProgressBar from "./ProgressBar";

type Props = {
    onConfirm: () => void,
    onCancel: () => void
}

const timerDurationMs = 5000;

export default function DeleteConfirmation({ onConfirm, onCancel }: Props) {
    //Here we are in need of the cleanup function for removing an interval
    useEffect(() => {
        const confirmTimerId = setTimeout(() => {
            onConfirm();
        }, timerDurationMs);

        //Will be executed right before dismount of the component
        return () => {
            clearTimeout(confirmTimerId);
        }

        //Here we should provide the onConfirm() as a dependency, because it is coming outside the useEffect()
        //However we should provide a functions as deps, only if they do not change any state,
        //because if the state will be changed => the component will be re-rendered => the onConfirm() will be recreated =>
        //this useEffect will be executed = infinite loop
        //In order to fix that u might just wrap the onConfirm() with useCallback(), which will tell the React to not recreate the function on re-renders
    }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
        <ProgressBar durationMs={timerDurationMs}/>
    </div>
  );
}
