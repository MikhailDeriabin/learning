package teht10.person;

public abstract class Person {
    private String name;
    private PersonType type;
    private float salary;

    public Person(String name, PersonType type, float salary) {
        this.name = name;
        this.type = type;
        this.salary = salary;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public PersonType getType() {
        return type;
    }
    public void setType(PersonType type) {
        this.type = type;
    }

    public float getSalary() {
        return salary;
    }
    public void setSalary(float salary) {
        this.salary = salary;
    }

    @Override
    public String toString(){
        return name + ", " + type;
    }
}
