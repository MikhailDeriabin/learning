import { getStringInfo, toUpperCase } from '../../app/Util';

//This is a test suit
describe('Utils.ts test suit', () => {
    //This is a suit function
    //Start with a verb
    it('should return uppercase of a valid string', () => {
        //AAA example:

        //arrange:
        const input = 'abc';
        const expected = 'ABC';

        //act:
        const actual = toUpperCase(input);

        //assert
        expect(actual).toBe(expected);
    });

    //In order to get more test suites for different values, u can use parametrized test
    describe('toUpperCase() should return', () => {
        it.each([
            {input: 'abc', expected: 'ABC'},
            {input: 'My String', expected: 'MY STRING'},
            {input: 'some_str', expected: 'SOME_STR'}
        ])('"$expected" for "$input" value', ({input, expected}) => {
            const actual = toUpperCase(input);
            expect(actual).toBe(expected);
        });
    });

    
    //This is not the best way to write test, because if it fails, hard to understand why exactly
    it('should return right info object for a valid string', () => {
        //arrange:
        const inputStr = 'My String';
        const expected = {
            lowerCase: 'my string',
            upperCase: 'MY STRING',
            characters: ['M', 'y', ' ', 'S', 't', 'r', 'i', 'n', 'g'],
            length: 9,
            extraInfo: {}
        }

        //act:
        const actual = getStringInfo(inputStr);

        //assert:
        //Notice when comparing objects, u should use toEqual(), not toBe(), toBe() is only for primitive types
        expect(actual).toEqual(expected);
    });


    //It is better to write one test for one condition and we can see what exactly right/wrong with the function in the terminal output
    describe('getStringInfo() for argument "My String" should', () => {
        const inputStr = 'My String';

        test('return lower case string', () => {
            const expected = 'my string';

            const actual = getStringInfo(inputStr);

            expect(actual.lowerCase).toBe(expected);
        });
        test('return upper case string', () => {
            const expected = 'MY STRING';

            const actual = getStringInfo(inputStr);

            expect(actual.upperCase).toBe(expected);
        });
        test('return characters right array', () => {
            const expected = ['M', 'y', ' ', 'S', 't', 'r', 'i', 'n', 'g'];

            const actual = getStringInfo(inputStr);

            expect(actual.characters).toEqual(expected);
        });
        test('return right length', () => {
            const expected = 9;

            const actual = getStringInfo(inputStr);

            expect(actual.length).toBe(expected);
        });
        test('return right extraInfo as empty object', () => {
            const expected = {};

            const actual = getStringInfo(inputStr);

            expect(actual.extraInfo).toEqual(expected);
        });  
    });
});