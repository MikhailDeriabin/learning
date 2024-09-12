/**
 * The base product to create
 */
export default abstract class CarAbstract {
    constructor(
        public model: string, 
        public productionYear: number
    ) {}

    abstract displayCarInfo(): void;
}