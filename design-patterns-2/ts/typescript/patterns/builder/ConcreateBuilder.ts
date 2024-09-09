import IBuilder from "./IBuilder";
import Product from "./Product";

/**
 * Concreate implementation of builder
 */
export default class ConcreateBuilder implements IBuilder{
    private product!: Product;

    constructor(){
        this.reset();
    }

    reset() {
        this.product = new Product();
    }

    setPartA(){
        this.product.add('Part A');
    }

    setPartB(){
        this.product.add('Part B');
    }

    setPartC(){
        this.product.add('Part C');
    }

    getProduct(): Product {
        const result = this.product;
        this.reset();

        return result;
    }
}