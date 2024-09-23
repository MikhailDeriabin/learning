import IRunner from "../IRunner";
import CoffeeMakerFacade from "./coffee/CoffeeMakerFacade";

export default class Runner implements IRunner{
    run(exampleNumber: number=1){
        const coffeeMaker = new CoffeeMakerFacade();
        const myCoffee = coffeeMaker.makeCoffee();

        myCoffee.drink();
    }
}