import IFactory from "./IFactory";
import ProductA1 from "./products/ProductA1";
import ProductB1 from "./products/ProductB1";

export default class Factory1 implements IFactory {
    createProductA(){
        return new ProductA1();
    }
    createProductB(){
        return new ProductB1();
    }
}