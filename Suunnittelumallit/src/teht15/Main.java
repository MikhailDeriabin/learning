package teht15;

import java.sql.Date;
import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        Client client = new Client("John Smith", "Somestreet", 34, LocalDate.now());
        Adapter adapter = new Adapter(client);
        Person person = adapter.getPerson();
        person.printPerson();

        System.out.println("\n-------------------------------\n");

        Client client1 = new Client();
        Adapter adapter1 = new Adapter(client1);
        adapter1.setFirstName("Pekka");
        adapter1.setLastName("Vuorinen");
        adapter1.setBirthDate(Date.valueOf("2020-12-23"));
        adapter1.setAddress("Street 12");
        adapter1.printPerson();

        System.out.println("\n-------------------------------\n");

        client1 = adapter1.getClient();
        System.out.println(client1.getFullName());
    }
}
