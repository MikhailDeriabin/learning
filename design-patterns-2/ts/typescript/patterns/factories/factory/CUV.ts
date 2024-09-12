import CarAbstract from "./CarAbstract";

/**
 * The concreate product to create
 */
export default class CUV extends CarAbstract{
    displayCarInfo(){
        console.log(`This is a CUV. Model: ${this.model}, Production year: ${this.productionYear}`);
    }
}