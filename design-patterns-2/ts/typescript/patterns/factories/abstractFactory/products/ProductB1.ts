import IProductA from "./IProductA";
import IProductB from "./IProductB";

export default class ProductB1 implements IProductB{
    operationB(){
        return 'Product B1';
    }

    combinedOperation(product: IProductA){
        return `Compined operation of B1 with ${product.operationA()}`
    }
}