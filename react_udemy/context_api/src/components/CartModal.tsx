import {ForwardedRef, forwardRef, useImperativeHandle, useRef} from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';

type Props = {
    title: string;
    actions: any;
};

export type CartModalRef = {
    open: () => void;
}

const CartModal = forwardRef(function Modal(
  { title, actions }: Props,
  ref: ForwardedRef<CartModalRef>
) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
          if(dialog.current)
            dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <Cart />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById('modal')!
  );
});

export default CartModal;
