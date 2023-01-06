package teht13.visitor;

import teht13.Car;
import teht13.state.Beginner;
import teht13.state.Middle;
import teht13.state.Super;

public class LevelUpVisitor implements Visitor{
    @Override
    public void visitCar(Car car) {
        if (car.getLevel().getClass() == Beginner.class && car.getScore() >= 20){
            car.setLevel(new Middle());
        } else if(car.getLevel().getClass() == Middle.class && car.getScore() >= 40){
            car.setLevel(new Super());
        }
    }
}
