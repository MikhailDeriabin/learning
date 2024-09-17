import ICoffee from "./ICoffee";

export default class BlackCoffee implements ICoffee{
    constructor(
        private readonly price: number, 
        private readonly description: string
    ) {}

    getDescription(): string {
        return this.description;
    }

    getPrice(): number {
        return this.price;
    }
}