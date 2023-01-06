package teht15;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;

public class Adapter implements IPerson{
    private Client client;

    public Adapter(Client client) {
        this.client = client;
    }

    public Client getClient(){
        return this.client;
    }

    public Person getPerson(){
        return new Person(this.getFirstName(), this.getLastName(), this.getAddress(), this.getBirthDate());
    }

    public void setClient(Client client) {
        this.client = client;
    }

    @Override
    public String getFirstName() {
        String fullName = client.getFullName();

        if(fullName != null){
            String[] splittedName = fullName.split(" ");
            return splittedName[0];
        }
        return null;
    }

    @Override
    public String getLastName() {
        String fullName = client.getFullName();
        if(fullName != null){
            String[] splittedName = fullName.split(" ");
            return splittedName[1];
        }
        return null;
    }

    @Override
    public Date getBirthDate() {
        LocalDate dateToConvert = client.getBirthDate();
        if(dateToConvert != null){
            return Date.from(dateToConvert.atStartOfDay()
                    .atZone(ZoneId.systemDefault())
                    .toInstant());
        }
        return null;
    }

    @Override
    public String getAddress() {
        return client.getStreet() + " " + client.getHouseNum();
    }

    @Override
    public void setFirstName(String firstName) {
        client.setFullName(firstName);
    }

    @Override
    public void setLastName(String lastName) {
        String fullName = client.getFullName();
        if(fullName != null){
            client.setFullName(fullName + " " + lastName);
        } else{
            client.setFullName(lastName);
        }
    }

    @Override
    public void setBirthDate(Date birthDate) {
        LocalDate convertedDate = Instant.ofEpochMilli(birthDate.getTime())
                .atZone(ZoneId.systemDefault())
                .toLocalDate();;

        client.setBirthDate(convertedDate);
    }

    @Override
    public void setAddress(String address) {
        String[] splittedAddress = address.split(" ");
        String street = splittedAddress[0];
        int houseNum = Integer.parseInt(splittedAddress[1]);

        client.setStreet(street);
        client.setHouseNum(houseNum);
    }

    @Override
    public void printPerson() {
        System.out.println(client.getFullName());
        System.out.println(client.getBirthDate());
        System.out.println(client.getStreet() + " " + client.getHouseNum());
    }
}
