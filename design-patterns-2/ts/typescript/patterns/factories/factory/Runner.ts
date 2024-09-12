import IRunner from "../../IRunner";
import CarFactory from "./CarFactory";

export default class Runner implements IRunner{
    run(exampleNumber: number=1){
        const carFactory = new CarFactory();

        const car = carFactory.createCar('Hatchback', 'some model', 2007);
        car?.displayCarInfo();
    }
}