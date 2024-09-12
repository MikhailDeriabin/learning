import IProductA from "./IProductA";

export default interface IProductB{
    operationB: () => string;

    combinedOperation: (product: IProductA) => string;
}