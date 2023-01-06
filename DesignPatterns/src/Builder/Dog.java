package Builder;

//Item
public class Dog implements Animal{
    private String name;
    private String color;
    private String owner;
    private int age;

    public Dog(String name, String color, String owner, int age) {
        this.name = name;
        this.color = color;
        this.owner = owner;
        this.age = age;
    }

    public String getName() {
        return name;
    }
    public String getColor() {
        return color;
    }
    public String getOwner() {
        return owner;
    }
    public int getAge() {
        return age;
    }

    @Override
    public String toString(){
        return "Dog " + name;
    }
}