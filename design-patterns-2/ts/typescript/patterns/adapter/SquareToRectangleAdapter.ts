import IRectangle from "./IRectangle";
import Square from "./Square";

export default class SquareToRectangleAdapter implements IRectangle {
    constructor(
        private readonly square: Square
    ) {
    }
    area(): number {
        return this.square.getSide() * this.square.getSide();
    }
    getWidth(): number {
        return this.square.getSide();
    }
    getHeight(): number {
        return this.square.getSide();
    }
    
    toString(): string {
        return `Rectangle ${this.square.getSide()} x ${this.square.getSide()}`;
    }
}