import IRunner from "../../IRunner";
import Factory1 from "./Factory1";

export default class Runner implements IRunner{
    run(exampleNumber: number=1){
        const factory = new Factory1();

        const a = factory.createProductA();
        const b = factory.createProductB();

        console.log(a.operationA());
        console.log(b.operationB());
        console.log(b.combinedOperation(a));
    }
}