import IProductA from "./products/IProductA";
import IProductB from "./products/IProductB";

export default interface IFactory{
    createProductA: () => IProductA;
    createProductB: () => IProductB;
}