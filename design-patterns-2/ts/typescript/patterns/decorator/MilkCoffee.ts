import CoffeeDecoratorAbstract from "./CoffeeDecoratorAbstract";

export default class MilkCoffee extends CoffeeDecoratorAbstract{
    getPrice(): number {
        return this.coffee.getPrice() + 1;
    }
    getDescription(): string {
        return this.coffee.getDescription() + " with milk for pervs";
    }
}