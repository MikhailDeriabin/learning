package teht7;

public class Car {
    private CarLevel level;
    private int score;

    public Car(){
        this.score = 0;
        this.level = new Beginner();
    }

    public int drive(){
        levelUp();
        return this.level.drive();
    }

    public int spendGasoline(){
        return this.level.spendGasoline();
    }

    public void makeSound(){
        this.level.makeSound();
    }

    private void levelUp(){
        if (this.level.getClass() == Beginner.class && score >= 20){
            this.level = new Middle();
        } else if(this.level.getClass() == Middle.class && score >= 40){
            this.level = new Super();
        }
    }

    public void addScore(int score) {
        this.score += score;
    }

    public int getScore() {
        return score;
    }

    public CarLevel getLevel() {
        return level;
    }
}
