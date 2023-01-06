package FactoryMethod.factory;

import FactoryMethod.car.Car;

public abstract class CarFactory {

    //Factory method
    public Car getCar(){
        Car product = createCar();
        product.setDoorCount(4);
        product.setWheelCount(4);

        return product;
    }

    protected abstract Car createCar();
}
