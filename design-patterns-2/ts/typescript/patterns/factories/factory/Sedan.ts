import CarAbstract from "./CarAbstract";

/**
 * The concreate product to create
 */
export default class Sedan extends CarAbstract{
    displayCarInfo(){
        console.log(`This is a sedan. Model: ${this.model}, Production year: ${this.productionYear}`);
    }
}