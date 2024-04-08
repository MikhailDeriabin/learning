import {forwardRef, useImperativeHandle, useRef, ReactNode, ForwardedRef, useEffect} from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: ReactNode,
  open?: boolean;
}

export type ModalRef = {
  open: () => void;
  close: () => void;
}

function Modal({ children, open }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);

  //Here we are using browser API, so we need to use the useEffect(),
  //because if we run this code just inside the component, the ref will be null, so we will get an error
  //because the ref will be available only after the JSX is returned => it is exactly the time when the useEffect is called
  useEffect(() => {
    if(open)
      dialog.current?.showModal();
    else
      dialog.current?.close();
  }, [open]);

  return createPortal(
      <dialog className="modal" ref={dialog}>
        {open && children}
      </dialog>,
      document.getElementById('modal')!
  );
}

export default Modal;
