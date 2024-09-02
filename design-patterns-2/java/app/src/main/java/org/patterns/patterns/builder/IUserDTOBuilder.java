package org.patterns.patterns.builder;

import java.time.LocalDate;

/**
 * Interface for our builder in case we want to create some other builder in the future
 */
public interface IUserDTOBuilder {
	//methods to build "parts" of product at a time
	IUserDTOBuilder withFirstName(String fname) ;

	IUserDTOBuilder withLastName(String lname);

	IUserDTOBuilder withBirthday(LocalDate date);

	IUserDTOBuilder withAddress(Address address);
	//method to "assemble" final product
	IUserDTO build();
}

