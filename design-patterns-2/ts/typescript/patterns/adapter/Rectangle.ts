import IRectangle from "./IRectangle";

export default class Rectangle implements IRectangle{
    constructor(
        private readonly width: number, 
        private readonly height: number
    ) {}

    area(){
        return this.width * this.height;
    }

    getWidth(){
        return this.width;
    }

    getHeight(){
        return this.height;
    }

    toString(){
        return `Rectangle ${this.width} x ${this.height}`;
    }
}