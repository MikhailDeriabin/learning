import { BoiledWater } from "./Boiler";
import { GrindedBeans } from "./Grinder";

export default class Brewer {
    brewCoffee(beans: GrindedBeans, water: BoiledWater) {
        console.log('Brewing coffee...');
        console.log('Now coffee is ready');

        return new Coffee(beans, water);
    }
}

export class Coffee {
    constructor(private beans: GrindedBeans, private water: BoiledWater) {

    }

    drink() {
        console.log('Drinking coffee');
    }
}