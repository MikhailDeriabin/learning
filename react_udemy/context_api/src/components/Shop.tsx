import { DUMMY_PRODUCTS } from '../dummy-products';
import ProductCard from './ProductCard';

type Props = {
}

export default function Shop({ }: Props) {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
