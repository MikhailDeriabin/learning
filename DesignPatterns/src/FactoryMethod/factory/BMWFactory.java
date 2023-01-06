package FactoryMethod.factory;

import FactoryMethod.car.BMW;
import FactoryMethod.car.Car;

public class BMWFactory extends CarFactory{
    @Override
    protected Car createCar() {
        return new BMW();
    }
}
