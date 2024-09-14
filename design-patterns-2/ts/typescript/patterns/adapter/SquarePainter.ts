import Square from "./Square";

export default class SquarePainter {
    paint(square: Square){
        console.log('Start paining', square.toString());
        console.log('Square is painted to red');
    }
}