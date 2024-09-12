import IFactory from "./IFactory";
import ProductA2 from "./products/ProductA2";
import ProductB2 from "./products/ProductB2";

export default class Factory2 implements IFactory {
    createProductA(){
        return new ProductA2();
    }
    createProductB(){
        return new ProductB2();
    }
}