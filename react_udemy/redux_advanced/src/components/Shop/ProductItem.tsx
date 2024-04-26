import Card from '../UI/Card.js';
import classes from './ProductItem.module.css';
import {ProductItemT} from "../../type/Item";
import {cart} from "../../store/cartSlice/cartSlice";
import {useDispatch} from "react-redux";

type Props = {
  item: ProductItemT
}

const ProductItem = ({item}: Props) => {
  const { title, price, description } = item;

  const dispatch = useDispatch();

  function handleAdd(){
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
