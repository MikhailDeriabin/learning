export default class Square{
    constructor(
        private readonly side: number
    ) {}

    getSide(){
        return this.side;
    }

    toString(){
        return `Square ${this.side} x ${this.side}`;
    }
}