import IProductA from "./IProductA";
import IProductB from "./IProductB";

export default class ProductB2 implements IProductB{
    operationB(){
        return 'Product B2';
    }

    combinedOperation(product: IProductA){
        return `Compined operation of B2 with ${product.operationA()}`
    }
}