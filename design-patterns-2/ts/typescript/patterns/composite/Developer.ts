import IEmployee from "./IEmployee";

/**
 * Leaf of the IEmployee
 */
export default class Developer implements IEmployee {
    constructor(
        private readonly name: string, 
        private readonly salary: number
    ) {}

    getName(): string {
        return this.name;
    }
    getSalary(): number {
        return this.salary;
    }
    getRole(): string {
        return 'Developer';
    }
}