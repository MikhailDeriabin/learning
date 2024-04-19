import {createPortal} from "react-dom";
import {ReactNode, useEffect, useRef} from "react";

type Props = {
    open?: boolean;
    className?: string;
    onClose?: () => void;
    children?: ReactNode;
}

export default function Modal({ open, className='', onClose, children }: Props) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if(open)
            dialogRef.current?.showModal();
        else
            dialogRef.current?.close();
    }, [open]);

    return createPortal(
        <dialog ref={dialogRef} className={`modal ${className}`} onClose={onClose}>
            {children}
        </dialog>,
        document.getElementById('modal')!
    );
}