import { generateRandomId } from "../../../server_app/data/IdGenerator";


const randomValue = 'my_random_value';
jest.mock('crypto', () => {
    return {
        randomBytes: () => randomValue
    }
});

describe('generateRandomId test suit', () => {
    it('Should return a random id', () => {
        const actual = generateRandomId();

        expect(actual).toBe(randomValue);
    });
});