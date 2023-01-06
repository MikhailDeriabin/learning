package FactoryMethod;

import FactoryMethod.car.Car;
import FactoryMethod.factory.BMWFactory;
import FactoryMethod.factory.CarFactory;
import FactoryMethod.factory.MercedesFactory;

public class Main {
    public static void main(String[] args) {
        Car merc = getCar(new MercedesFactory());
        System.out.println(merc);
        System.out.println(merc + " slogan " + merc.getSlogan());
        System.out.println(merc + " doors " + merc.getDoorCount());

        System.out.println("--------------------");

        Car bmw = getCar(new BMWFactory());
        System.out.println(bmw);
        System.out.println(bmw + " slogan " + bmw.getSlogan());
        System.out.println(bmw + " doors " + bmw.getDoorCount());
    }

    public static Car getCar(CarFactory carFactory){
        return carFactory.getCar();
    }
}
