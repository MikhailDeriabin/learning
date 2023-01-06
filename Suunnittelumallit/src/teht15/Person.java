package teht15;

import java.util.Date;

public class Person implements IPerson{
    private String firstName, lastName, address;
    private Date birthDate;

    public Person(String firstName, String lastName, String address, Date birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.birthDate = birthDate;
    }

    @Override
    public String getFirstName() {
        return firstName;
    }

    @Override
    public String getLastName() {
        return lastName;
    }

    @Override
    public Date getBirthDate() {
        return birthDate;
    }

    @Override
    public String getAddress() {
        return address;
    }

    @Override
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Override
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Override
    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    @Override
    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public void printPerson() {
        System.out.println(this.firstName + " " + this.lastName);
        System.out.println(this.birthDate);
        System.out.println(this.address);
    }
}
