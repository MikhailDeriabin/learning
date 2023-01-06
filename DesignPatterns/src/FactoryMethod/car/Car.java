package FactoryMethod.car;

public abstract class Car {
    private String name = "Default car";
    private int wheelCount;
    private int doorCount;
    private String slogan;

    public String getName() {
        return name;
    }
    public int getWheelCount() {
        return wheelCount;
    }
    public int getDoorCount() {
        return doorCount;
    }
    public String getSlogan() {
        return slogan;
    }

    public void setName(String name){
        this.name = name;
    }
    public void setWheelCount(int wheelCount) {
        this.wheelCount = wheelCount;
    }
    public void setDoorCount(int doorCount) {
        this.doorCount = doorCount;
    }
    public void setSlogan(String slogan) {
        this.slogan = slogan;
    }

    @Override
    public String toString(){
        return name;
    }
}
