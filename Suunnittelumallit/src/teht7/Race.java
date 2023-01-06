package teht7;

import java.util.Random;

public class Race {
    public static void main(String[] args) {
        int distance = 100;
        int gasolineLevel = 50;

        Car car = new Car();

        while (gasolineLevel > 0 && distance > 0){
            distance -= car.drive();
            gasolineLevel -= car.spendGasoline();
            car.makeSound();

            int rand = new Random().nextInt(100);

            if(rand <= 50){
                car.addScore(5);
            }
        }

        if(distance <= 0)
            System.out.println("You won with " + car.getScore() + " score points. Your car level is " + car.getLevel());
        else
            System.out.println("You lose with " + car.getScore() + " score points. Your car level is " + car.getLevel());
    }
}
