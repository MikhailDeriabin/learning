import IRunner from "../IRunner";
import IRectangle from "./IRectangle";
import Rectangle from "./Rectangle";
import Square from "./Square";
import SquarePainter from "./SquarePainter";
import SquareToRectangleAdapter from "./SquareToRectangleAdapter";

export default class Runner implements IRunner{
    run(exampleNumber: number=1){
        //Some code that works with rectangle
        const rect = new Rectangle(12, 30);
        const scaledRect = this.scaleRectangle(rect, 2);
        console.log(scaledRect.toString());

        //Some code that works with square
        const square = new Square(2);
        const painter = new SquarePainter();
        painter.paint(square);

        //Now we want to enlarge the square, 
        //but we have only method that works with rectanles.
        //So instead of writing a separate method that works with squares we use adapter
        const sqareRect = new SquareToRectangleAdapter(square);
        const biggerSquare = this.scaleRectangle(sqareRect, 10);
        console.log(biggerSquare.toString());
    }

    private scaleRectangle(rectangle: IRectangle, scale: number) {
        const newWidth = rectangle.getWidth() * scale;
        const newHeight = rectangle.getHeight() * scale;

        return new Rectangle(newWidth, newHeight);
    }
}