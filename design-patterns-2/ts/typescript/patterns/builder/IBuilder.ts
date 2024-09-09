import Product from "./Product";

export default interface IBuilder {
    setPartA: () => void;
    setPartB: () => void;
    setPartC: () => void;

    getProduct: () => Product;
}