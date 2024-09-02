package org.patterns.patterns.builder;

import java.time.LocalDate;
import java.time.Period;

/**
 * This is a more common and easier way to implement builder to have it inside of the class, which it is constructs.
 * With that, we do not need a constructor for this class.
 */
public class UserDTOWithInnerBuilder implements IUserDTO {
    private String name;
	private String address;
	private String age;

    @Override
    public String getName() {
		return name;
	}

    @Override
	public String getAddress() {
		return address;
	}

    @Override
	public String getAge() {
		return age;
	}

    /**
     * Notice that this method is private and so the class is immutable
     * @param name
     */
    private void setName(String name){
        this.name = name;
    }
    private void setAge(String age){
        this.age = age;
    }
    private void setAddress(String address){
        this.address = address;
    }

    /**
     * Get the builder for this class construction
     * @return
     */
    public static UserDTOBuilder getBuilder(){
        return new UserDTOBuilder();
    }

    public static class UserDTOInnerBuilder{
        private String firstName;
        private String lastName;
        private String age;
        private String address;

        private UserDTOWithInnerBuilder userDTO;
        
        public UserDTOInnerBuilder withFirstName(String fname) {
            firstName = fname;
            return this;
        }
        
        public UserDTOInnerBuilder withLastName(String lname) {
            lastName = lname;
            return this;
        }
        
        public UserDTOInnerBuilder withBirthday(LocalDate date) {
            Period ageInYears = Period.between(date, LocalDate.now());
    
            age = Integer.toString(ageInYears.getYears());
            return this;
        }
        
        public UserDTOInnerBuilder withAddress(Address address) {
            this.address = address.getStreet() + " " + address.getHouseNumber() + ", " + 
                            address.getCity() + " " + address.getZipcode();
            return this;
        }
        
        public IUserDTO build() {
            String name = firstName + " " + lastName;

            userDTO = new UserDTOWithInnerBuilder();
            userDTO.setName(name);
            userDTO.setAddress(address);
            userDTO.setAge(age);

            return userDTO;
        }
    }
}
