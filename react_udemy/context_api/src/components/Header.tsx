import {useContext, useRef} from 'react';
import CartModal, {CartModalRef} from './CartModal';
import {ShoppingCartContext} from "../store/ShoppingCartContext/shopping-cart-context";

type Props = {
};

export default function Header({ }: Props) {
  const modal = useRef<CartModalRef>(null);

  const {items}= useContext(ShoppingCartContext);

  const cartQuantity = items.length;

  function handleOpenCartClick() {
      if(modal.current)
        modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        title="Your Cart"
        actions={modalActions}
      />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
