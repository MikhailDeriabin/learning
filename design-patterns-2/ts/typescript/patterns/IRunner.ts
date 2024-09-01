/**
 * Interface for general classes, which holds some examples for design classes
 */
export default interface IRunner {
    /**
     * Runs an example use case of a design pattern
     * @param exampleNumber which example to run
     */
    run: (exampleNumber?: number) => void;
}