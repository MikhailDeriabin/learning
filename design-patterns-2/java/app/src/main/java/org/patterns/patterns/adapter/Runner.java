package org.patterns.patterns.adapter;

import org.patterns.patterns.IRunner;

public class Runner implements IRunner{

    @Override
    public void run(int exampleNum) {
        if(exampleNum == 1){
            //Old code, which works with Employee objects only
            EmployeeClassAdapter customer = new EmployeeClassAdapter();
            populateEmployeeData(customer);

            //New code that needs ICustomer objects
            BusinessCardDesigner designer = new BusinessCardDesigner();
            String card = designer.designCard(customer);

            System.out.println(card);
        }

        if(exampleNum == 2){
            Employee employee = new Employee();
            populateEmployeeData(employee);

            ICustomer customer = new EmployeeObjectAdapter(employee);
            BusinessCardDesigner designer = new BusinessCardDesigner();
            String card = designer.designCard(customer);

            System.out.println(card);
        }
    }

    private static void populateEmployeeData(Employee employee) {
		employee.setFullName("Elliot Alderson");
		employee.setJobTitle("Security Engineer");
		employee.setOfficeLocation("Allsafe Cybersecurity, New York City, New York");
	}
}
