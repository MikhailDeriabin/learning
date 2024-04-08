import {ForwardedRef, forwardRef, useImperativeHandle, useRef} from "react";

type Props = {
    targetTimeS: number;
    remainingTimeS: number;
    resetTimer: () => void;
};

//for useImperativeHandle() only, u can use standard HTMLDialogElement
export type DialogRef = {
    showModal: () => void;
}

//In order to get ref, u must wrap the component with forwardRef function,
// which accepts a callback with the first parameter being just normal props and the second is the ref for the component, which u can use in your component
const ResultModal = forwardRef(
    function ({targetTimeS, remainingTimeS, resetTimer}: Props, ref: ForwardedRef<DialogRef>) {

                //Here is one trick in case u want to be sure that this component always will have required methods.
                //Because in the parent component we are using the openModal() build-in HTML function for dialog component
                //but what if somebody will change the dialog component here to div or something like that?
                //obviously it will stop working everywhere it is in use.
                //So here u have coupling and requirement that this component must be a dialog
                //To get rid of that and ensure that everything works no matter what, u can expose this component API for outside
                //by using useImperativeHandle() hook, in which u are just specifying all needed methods and implementing them:

                //just to get the standard showModal() from our dialog component via ref.current
                const dialogRef = useRef<HTMLDialogElement>(null);

                useImperativeHandle(ref, () => {
                    return {
                        showModal: () => {
                            //Since we are using the dialog elem here, we can just call standard methods
                            //without need to implement it
                            //if the dialog will be changed to div, the dev who do it will have to implement that method
                            dialogRef.current?.showModal();
                        }
                    };
                });

                const userLost = remainingTimeS <= 0;

                return(
                    <dialog className="result-modal" ref={dialogRef}>
                        <h2>{userLost ? 'You lost' : 'You win'}</h2>
                        <p>The target time was {targetTimeS} seconds</p>
                        {!userLost && <p>You stopped the timer with {remainingTimeS} seconds</p>}
                        <form method="dialog">
                            <button onClick={resetTimer}>Close</button>
                        </form>
                    </dialog>
                );
        }
);

export default ResultModal;