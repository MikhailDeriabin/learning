package teht13;

import teht13.state.Beginner;
import teht13.state.CarLevel;
import teht13.visitor.LevelUpVisitor;

public class Car {
    private final LevelUpVisitor levelUpVisitor;
    private CarLevel level;
    private int score;

    public Car(){
        this.score = 0;
        this.level = new Beginner();
        levelUpVisitor = new LevelUpVisitor();
    }

    public int drive(){
        return this.level.drive();
    }

    public int spendGasoline(){
        return this.level.spendGasoline();
    }

    public void makeSound(){
        this.level.makeSound();
    }

    public void addScore(int score) {
        this.score += score;
        levelUpVisitor.visitCar(this);
    }

    public int getScore() {
        return score;
    }

    public CarLevel getLevel() {
        return level;
    }

    public void setLevel(CarLevel level) {
        this.level = level;
    }
}