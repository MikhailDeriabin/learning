package org.patterns.patterns.adapter;

/**
 * The adapter allows as to use some old code in new code.
 * Here we have the old Employee class with existing functionalities, 
 * but we want to use class which implemets ICustomer.
 * 
 * We just extend the class with needed functionalities 
 * and implement the new interface using this functionality from the old class.
 * 
 * Notice that it is not a preferred way of implementing the Adapter pattern, use composition instead
 */
public class EmployeeClassAdapter extends Employee implements ICustomer{
    @Override
    public String getName() {
        return super.getFullName();
    }

    @Override
    public String getDesignation() {
        return super.getJobTitle();
    }

    @Override
    public String getAddress() {
        return super.getOfficeLocation();
    }
}
