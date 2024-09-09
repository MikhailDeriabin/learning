/**
 * What to build
 */
export default class Product {
    private parts: string[] = [];

    public add(part: string){
        this.parts.push(part);
    }

    public listParts(){
        console.log(`Product parts: ${this.parts.join(', ')}`);
    }
}