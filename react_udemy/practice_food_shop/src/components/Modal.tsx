import {ForwardedRef, forwardRef, HTMLProps, ReactNode, useImperativeHandle, useRef} from "react";

type Props = {
    children?: ReactNode;
} & HTMLProps<HTMLDialogElement>;
export type ModalRef = {
    open: () => void;
    close: () => void;
}

const Modal = forwardRef(function ({ children, ...props }: Props, ref: ForwardedRef<ModalRef>) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    useImperativeHandle(ref,() => {
        return {
            open: () => {
                dialogRef.current?.showModal();
            },
            close: () => {
                dialogRef.current?.close();
            }
        }
    });

    return(
        <dialog {...props} ref={dialogRef}>
            {children}
        </dialog>
    );
})

export default Modal;