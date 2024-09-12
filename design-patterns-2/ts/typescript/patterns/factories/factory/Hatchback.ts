import CarAbstract from "./CarAbstract";

/**
 * The concreate product to create
 */
export default class Hatchback extends CarAbstract{
    displayCarInfo(){
        console.log(`This is a hatchback. Model: ${this.model}, Production year: ${this.productionYear}`);
    }
}