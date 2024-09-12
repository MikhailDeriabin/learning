import CarAbstract from "./CarAbstract";
import CUV from "./CUV";
import Hatchback from "./Hatchback";
import Sedan from "./Sedan";

/**
 * The simple facory method
 */
export default class CarFactory{
    public createCar(
        type: 'Sedan' | 'CUV' | 'Hatchback', 
        model: string, 
        productionYear: number
    ): CarAbstract | null {
        switch (type) {
            case 'Sedan':
                return new Sedan(model, productionYear);
            case 'CUV':
                return new CUV(model, productionYear);
            case 'Hatchback':
                return new Hatchback(model, productionYear);
            default:
                return null;
        }
    }
}