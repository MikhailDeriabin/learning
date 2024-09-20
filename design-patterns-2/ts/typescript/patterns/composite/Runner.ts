import IRunner from "../IRunner";
import Designer from "./Designer";
import Developer from "./Developer";
import IEmployee from "./IEmployee";
import Manager from "./Manager";

export default class Runner implements IRunner {
    run(exampleNumber: number = 1) {
        const john = new Designer('John', 2000);
        const jake = new Developer('Jake', 3000);
        const kris = new Developer('Kris', 6000);

        const manager = new Manager('Bob', 8000);
        manager.addEmployee(john);
        manager.addEmployee(jake);
        manager.addEmployee(kris);

        this.printEmployee(manager);

        //We also can easily traverse through all employees
        //In theory u can print them with recursion even if u have nested managers
        const employees = manager.getEmployees();
        employees.map((employee) => this.printEmployee(employee));

    }

    private printEmployee(employee: IEmployee) {
        console.log(`${employee.getName()} is a ${employee.getRole()} and has a salary of ${employee.getSalary()}`);
    }
}