package Builder;

//Concrete builder
public class DogBuilder implements AnimalBuilder{

    private String dogName;
    private String dogColor;
    private String dogOwner;
    private int dogAge;

    public DogBuilder() {
        this.dogName = null;
        this.dogColor = null;
        this.dogOwner = null;
        this.dogAge = 0;
    }

    @Override
    public AnimalBuilder withName(String name) {
        this.dogName = name;
        return this;
    }

    @Override
    public AnimalBuilder withColor(String color) {
        this.dogColor = color;
        return this;
    }

    @Override
    public AnimalBuilder withOwner(String color) {
        this.dogOwner = color;
        return this;
    }

    @Override
    public AnimalBuilder withAge(int age) {
        this.dogAge = age;
        return this;
    }

    @Override
    public Animal build(){
        return new Dog(dogName, dogColor, dogOwner, dogAge);
    }
}
