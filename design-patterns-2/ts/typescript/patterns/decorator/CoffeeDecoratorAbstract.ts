import ICoffee from "./ICoffee";

export default abstract class CoffeeDecoratorAbstract implements ICoffee{
    constructor(
        protected readonly coffee: ICoffee
    ) {}

    abstract getPrice(): number;
    abstract getDescription(): string;
}