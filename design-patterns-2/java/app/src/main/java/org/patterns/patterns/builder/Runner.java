package org.patterns.patterns.builder;

import org.patterns.patterns.IRunner;
import java.time.LocalDate;

public class Runner implements IRunner{

    @Override
    public void run(int exampleNum) {
        if(exampleNum == 1){
            User user = getUserFromDB();

            IUserDTO userDTO = getUserDTO(new UserDTOBuilder(), user);
    
            System.out.println(userDTO);
        }

        if(exampleNum == 2){
            User user = getUserFromDB();

            IUserDTO userDTO = getUserDTO(UserDTOWithInnerBuilder.getBuilder(), user);
    
            System.out.println(userDTO);
        }
        
    }

    /**
     * Converts the User to UserDTO with help of builder
     * @param builder
     * @param userFromWhichToBuild
     * @return
     */
    private IUserDTO getUserDTO(IUserDTOBuilder builder, User userFromWhichToBuild){
        return builder
            .withFirstName(userFromWhichToBuild.getFirstName())
            .withLastName(userFromWhichToBuild.getLastName())
            .withBirthday(userFromWhichToBuild.getBirthday())
            .withAddress(userFromWhichToBuild.getAddress()).build();
    }

    /**
     * Kinda get data from DB
     * @return
     */
    private User getUserFromDB() {
		User user = new User();
		user.setBirthday(LocalDate.of(1960, 5, 6));
		user.setFirstName("Ron");
		user.setLastName("Swanson");
		Address address = new Address();
		address.setHouseNumber("100");
		address.setStreet("State Street");
		address.setCity("Pawnee");
		address.setState("Indiana");
		address.setZipcode("47998");
		user.setAddress(address);
		return user;
	}
}
