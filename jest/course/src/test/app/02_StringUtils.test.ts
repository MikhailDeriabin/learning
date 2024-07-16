import { StringUtils } from "../../app/StringUtils";

describe('StringUtils jest hooks', () => {
    //Common var, containing a class, which is gonna to be created before each test
    //Notice here that each time a new instance will be created => tests will be independent (isolated)
    let stringUtils: StringUtils;

    //These are 2 of the most used jest hooks
    //With hooks u can do any arrangements needed
    //Notice that the hooks are relative to the describe block => so the beforeEach will run before each test inside this describe block
    beforeEach(() => {
        stringUtils = new StringUtils();
    });

    //This one is usually used for the clearing all mocks
    afterEach(() => {});

    it('Should return upper case string', () => {
        const input = 'abc';
        const expected = 'ABC';

        const actual = stringUtils.toUpperCase(input);

        expect(actual).toBe(expected);
    });
});

describe('Examples for checking functions throwing errors', () => {
    let stringUtil: StringUtils;

    beforeEach(() => {
        stringUtil = new StringUtils();
    });

    it('Should throw an error on invalid argument - function', () => {
        const input = '';
        function expectError (){
            stringUtil.toUpperCase(input);
        }
        
        expect(expectError).toThrow();
        expect(expectError).toThrow('Invalid argument');
    });

    it('Should throw an error on invalid argument - try-catch', (done) => {
        const input = '';
        try {
            stringUtil.toUpperCase(input);
            //Notice that jest has a bug and the fail() is not defined, so u should use done instead of fail()
            //If it does not throw an error => test is failed
            done('toUpperCase() should throw an error with message: Invalid argument');
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message', 'Invalid argument');
            //Notice that if u are using done() each code block should call it, 
            //if u are not calling it the jest will wait pretty long and when throw timeout error
            done();
        }
    });
});


describe('StringUtils jest aliases', () => {
    //Here are some features of jest with can be used while writing the tests

    let stringUtils: StringUtils;

    beforeEach(() => {
        stringUtils = new StringUtils();
    });

    //Not yet done
    it.todo('Should return upper case string');

    //Skip it
    it.skip('Skip Should return upper case string', () => {
        const input = 'abc';
        const expected = 'ABC';

        const actual = stringUtils.toUpperCase(input);

        expect(actual).toBe(expected);
    });

    //Some problem with beforeEach
    it.concurrent('Concurrent Should return upper case string', () => {
        const input = 'abc';
        const expected = 'ABC';

        stringUtils = new StringUtils();
        const actual = stringUtils.toUpperCase(input);

        expect(actual).toBe(expected);
    });
});