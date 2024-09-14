package org.patterns.patterns.adapter;

public class EmployeeObjectAdapter implements ICustomer{
    public EmployeeObjectAdapter(Employee employee){
        this.employee = employee;
    }
    private final Employee employee;

    @Override
    public String getName() {
        return this.employee.getFullName();
    }

    @Override
    public String getDesignation() {
        return this.employee.getJobTitle();
    }

    @Override
    public String getAddress() {
        return this.employee.getOfficeLocation();
    }
}
