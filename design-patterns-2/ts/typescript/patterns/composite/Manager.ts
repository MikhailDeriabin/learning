import ICompositeEmployee from "./ICompositeEmployee";
import IEmployee from "./IEmployee";

/**
 * Composite object containing leaves
 */
export default class Manager implements ICompositeEmployee {
    constructor(
        private readonly name: string,
        private readonly salary: number
    ) { }

    private employees: IEmployee[] = [];

    addEmployee(employee: IEmployee): void {
        this.employees.push(employee);
    }
    removeEmployee(employee: IEmployee): void {
        this.employees = this.employees.filter(e => e.getName() !== employee.getName());
    }
    getEmployees(): IEmployee[] {
        return this.employees;
    }


    getName(): string {
        return this.name;
    }
    getSalary(): number {
        return this.salary;
    }
    getRole(): string {
        return 'Manager';
    }
}