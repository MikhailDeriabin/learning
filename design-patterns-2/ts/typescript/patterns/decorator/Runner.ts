import IRunner from "../IRunner";
import BlackCoffee from "./BlackCoffee";
import ICoffee from "./ICoffee";
import MilkCoffee from "./MilkCoffee";

export default class Runner implements IRunner{
    run(exampleNumber: number=1){
        const blackCoffee = new BlackCoffee(1.5, 'Nice cap of a hot black coffee');
        this.printCoffee(blackCoffee);

        const milkCoffee = new MilkCoffee(blackCoffee);
        this.printCoffee(milkCoffee);
    }

    private printCoffee(coffee: ICoffee){
        console.log(`${coffee.getDescription()} for only ${coffee.getPrice()}€`);
    }
}