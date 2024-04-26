import ProductItem from './ProductItem.js';
import classes from './Products.module.css';
import {ProductItemT} from "../../type/Item";

const Products = () => {
    const items: ProductItemT[] = [
        {
            title: 'Tomato',
            price: 3,
            description: 'Tasty and fresh tomato'
        },
        {
            title: 'T-shirt',
            price: 10,
            description: 'Be stylish af'
        },
        {
            title: 'Watch',
            price: 120,
            description: 'Be that always-in-time guy'
        }
    ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
          {items && items.length > 0 && (
              items.map((item) => (
                  <ProductItem
                      key={item.title}
                      item={item}
                  />
              ))
          )}
          {(!items || items.length === 0) && (
              <p>No items found</p>
          )}
      </ul>
    </section>
  );
};

export default Products;
