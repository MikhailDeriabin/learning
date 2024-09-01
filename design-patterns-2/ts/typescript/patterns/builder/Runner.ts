import IRunner from "../IRunner";

export default class Runner implements IRunner{
    run(exampleNumber: number=1){
        console.log(exampleNumber);
    }
}