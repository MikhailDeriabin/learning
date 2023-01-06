package teht15;

import java.time.LocalDate;

public class Client {
    private String fullName, street;
    private LocalDate birthDate;
    private int houseNum;

    public Client(){}

    public Client(String fullName, String street, int houseNum, LocalDate birthDate) {
        this.fullName = fullName;
        this.street = street;
        this.birthDate = birthDate;
        this.houseNum = houseNum;
    }

    public String getFullName() {
        return fullName;
    }
    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getStreet() {
        return street;
    }
    public void setStreet(String street) {
        this.street = street;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }
    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public int getHouseNum() {
        return houseNum;
    }
    public void setHouseNum(int houseNum) {
        this.houseNum = houseNum;
    }
}
