package FactoryMethod.factory;

import FactoryMethod.car.Car;
import FactoryMethod.car.Mercedes;

public class MercedesFactory extends CarFactory{
    @Override
    protected Car createCar() {
        return new Mercedes();
    }
}
