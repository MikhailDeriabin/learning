import {Link} from "react-router-dom";
import {Product} from "../types/Product";

const productsFromServer: Product[] = [
    { id: 'p1', name: 'Pizza', price: 600 },
    { id: 'p2', name: 'Tomato', price: 300 },
    { id: 'p3', name: 'Cheese', price: 200 },
];

export default function ProductsPage() {
    return (
        <>
            <h1>My products</h1>
            <ul>
                {productsFromServer.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            {product.name} {product.price}€
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}