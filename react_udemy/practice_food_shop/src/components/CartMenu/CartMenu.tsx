import {ForwardedRef, forwardRef, useContext, useImperativeHandle, useRef, useState} from "react";
import CheckoutMenu from "./CheckoutMenu";
import CartItemsMenu from "./CartItemsMenu/CartItemsMenu";
import Modal, {ModalRef} from "../Modal";
import {MealsContext} from "../../store/MealsContext/meals-context";
import {getTotalOrdersSum} from "../../util/calculate";

type Props = {}

export type CartMenuRef = {
    open: () => void;
}

const CartMenu = forwardRef(function ({}: Props, ref: ForwardedRef<CartMenuRef>) {
    const [isCheckout, setIsCheckout] = useState<boolean>(false);
    const modalRef = useRef<ModalRef>(null);

    const {meals} = useContext(MealsContext);

    useImperativeHandle(ref, () => ({
        open: () => {modalRef.current?.open()},
    }));

    function handleGoToCheckout() {
        setIsCheckout(true);
    }
    function handleGoToItems() {
        setIsCheckout(false);
    }
    function handleCloseModal() {
        modalRef.current?.close();
    }

    const addedMeals = meals?.filter(m => m.count > 0);
    let totalPrice = 0;
    if(addedMeals)
        totalPrice = getTotalOrdersSum(addedMeals);

    return(
        <Modal className="modal" ref={modalRef}>
            {!isCheckout && <CartItemsMenu meals={addedMeals} totalPrice={totalPrice} onGoToCheckout={handleGoToCheckout} onCloseModal={handleCloseModal}/>}
            {isCheckout && <CheckoutMenu meals={addedMeals} totalPrice={totalPrice} onGoToItems={handleGoToItems} onCloseModal={handleCloseModal}/>}
        </Modal>
    );
});

export default CartMenu;