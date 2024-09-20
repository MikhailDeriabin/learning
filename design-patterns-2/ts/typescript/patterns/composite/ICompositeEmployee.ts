import IEmployee from "./IEmployee";

/**
 * Interface for composite object(s) only
 */
export default interface ICompositeEmployee extends IEmployee{
    addEmployee(employee: IEmployee): void;
    removeEmployee(employee: IEmployee): void;
    getEmployees(): IEmployee[];
}