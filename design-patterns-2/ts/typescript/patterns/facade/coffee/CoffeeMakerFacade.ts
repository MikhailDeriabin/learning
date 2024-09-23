import Boiler from "./Boiler";
import Brewer from "./Brewer";
import Grinder from "./Grinder";

export default class CoffeeMakerFacade {
    constructor() {
        this.grinder = new Grinder();
        this.boiler = new Boiler();
        this.brewer = new Brewer();
    }
    private readonly grinder: Grinder;
    private readonly boiler: Boiler;
    private readonly brewer: Brewer;

    makeCoffee(){
        const beans = this.grinder.grindBeans();
        const water = this.boiler.boilWater();

        const coffee = this.brewer.brewCoffee(beans, water);

        return coffee;
    }
}