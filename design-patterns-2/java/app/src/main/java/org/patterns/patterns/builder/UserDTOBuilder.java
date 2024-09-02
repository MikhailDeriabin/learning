package org.patterns.patterns.builder;

import java.time.LocalDate;
import java.time.Period;

/**
 * The builder implementation
 */
public class UserDTOBuilder implements IUserDTOBuilder{
    private String firstName;
    private String lastName;
    private String age;
    private String address;

    private UserDTO userDTO;

    @Override
    public IUserDTOBuilder withFirstName(String fname) {
        firstName = fname;
        return this;
    }

    @Override
    public IUserDTOBuilder withLastName(String lname) {
        lastName = lname;
        return this;
    }

    @Override
    public IUserDTOBuilder withBirthday(LocalDate date) {
        Period ageInYears = Period.between(date, LocalDate.now());

        age = Integer.toString(ageInYears.getYears());
        return this;
    }

    @Override
    public IUserDTOBuilder withAddress(Address address) {
        this.address = address.getStreet() + " " + address.getHouseNumber() + ", " + 
                        address.getCity() + " " + address.getZipcode();
        return this;
    }


    @Override
    public IUserDTO build() {
        String name = firstName + " " + lastName;
        userDTO = new UserDTO(name, address, age);
        return userDTO;
    }
}
