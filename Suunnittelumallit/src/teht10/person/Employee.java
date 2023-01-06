package teht10.person;

public class Employee extends Person {

    public Employee(String name, float salary) {
        super(name, PersonType.EMPLOYEE, salary);
    }
}
