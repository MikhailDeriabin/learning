import Card from '../UI/Card.js';
import classes from './ProductItem.module.css';
import {ProductItemT} from "../../type/Item";
import {cart} from "../../store/cartSlice/cartSlice";
import {useDispatch, useSelector} from "react-redux";

type Props = {
  item: ProductItemT
}

const ProductItem = ({item}: Props) => {
  const { title, price, description } = item;

  const dispatch = useDispatch();

  const cart = useSelector();

  function handleAdd(){
    const newTotalQuantity = cart.totalQuantity + 1;

    const updatedItems = cart.items.slice(); // create copy via slice to avoid mutating original state
    const existingItem = updatedItems.find((item) => item.id === id);
    if (existingItem) {
      const updatedItem = { ...existingItem }; // new object + copy existing properties to avoid state mutation
      updatedItem.quantity++;
      updatedItem.totalPrice = updatedItem.totalPrice + price;
      const existingItemIndex = updatedItems.findIndex(
          (item) => item.id === id
      );
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({
        id: id,
        price: price,
        quantity: 1,
        totalPrice: price,
        name: title,
      });
    }

    const newCart = {
      totalQuantity: newTotalQuantity,
      items: updatedItems,
    };


    dispatch(cart.addItem(item));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAdd}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
