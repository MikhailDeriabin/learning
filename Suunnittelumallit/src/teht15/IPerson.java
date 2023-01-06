package teht15;

import java.util.Date;

public interface IPerson {
    String getFirstName();
    String getLastName();
    Date getBirthDate();
    String getAddress();

    void setFirstName(String firstName);
    void setLastName(String lastName);
    void setBirthDate(Date birthDate);
    void setAddress(String address);

    void printPerson();
}
