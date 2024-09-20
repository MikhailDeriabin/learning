/**
 * The base interface for all elements composite and leaves
 */
export default interface IEmployee{
    getName(): string;
    getSalary(): number;
    getRole(): string;
}