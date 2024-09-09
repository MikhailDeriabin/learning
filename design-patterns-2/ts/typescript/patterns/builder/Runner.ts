import IRunner from "../IRunner";
import ConcreateBuilder from "./ConcreateBuilder";
import { Director } from "./Director";

export default class Runner implements IRunner{
    run(exampleNumber: number=1){
        if(exampleNumber === 1){
            const builder = new ConcreateBuilder();
            const director = new Director();
            director.setBuilder(builder);

            const product = director.buildMinProduct();
            product.listParts();
        }

        if(exampleNumber === 2){
            const builder = new ConcreateBuilder();
            const director = new Director();
            director.setBuilder(builder);

            const product = director.buildFullProduct();
            product.listParts();
        }
    }
}