import { calculateComplexity, OtherUtils, toUpperWithCallback } from "../../doubles/OtherUtils";

describe('OtherTestUtils file test suite', () => {
    describe('calculateComplexity()', () => {
        it('Stub example', () => {
            //We know that the function does not need a whole object to calculate the complexity, only part of the fields,
            //So we can make a stub object with the required fields only
            const input = {
                extraInfo: { field1: 'value1', field2: 'value2', field3: 'value3' },
                length: 2
            } as any;
            const expected = 6;

            const actual = calculateComplexity(input);

            expect(actual).toBe(expected);
        });
    });

    describe('toUpperWithCallback()', () => {
        it('Fake example', () => {
            //Since we do not really need here the callback function to test, but the result of the toUpperWithCallback(), we can fake it
            const fakeCallback = (str: string) => { return; }
            const input = '';
            const expected = undefined;

            const actual = toUpperWithCallback(input, fakeCallback);

            expect(actual).toBe(expected);
        });

        //We are creating some outside vars to track some info of the function
        let argumentsPassedToCallBack: any[] = [];
        let timesCalled = 0;
        const callbackMock = (str: string) => { 
            argumentsPassedToCallBack.push(str);
            timesCalled++;
            return; 
        }
        //Notice that we also have to reset these values
        afterEach(() => {
            argumentsPassedToCallBack = [];
            timesCalled = 0;
        });

        it('Mock example invalid, tracking callbacks', () => {
            const input = '';
            const expected = undefined;

            const actual = toUpperWithCallback(input, callbackMock);

            expect(actual).toBe(expected);

            //Now we can check that the callback function is used in the correct way
            expect(timesCalled).toBe(1);
            expect(argumentsPassedToCallBack).toHaveLength(1);
            expect(argumentsPassedToCallBack).toContain('Invalid str');
        });
        it('Mock example valid, tracking callbacks', () => {
            const input = 'my_str';
            const expected = 'MY_STR';

            const actual = toUpperWithCallback(input, callbackMock);

            expect(actual).toBe(expected);

            //Now we can check that the callback function is used in the correct way
            expect(timesCalled).toBe(1);
            expect(argumentsPassedToCallBack).toHaveLength(1);
            expect(argumentsPassedToCallBack).toContain('OK');
        });
    });

    describe('toUpperWithCallback(), tracking callbacks with Jest', () => {

        //Built in mock for functions, the logic is a bit different for testing than the above
        const callbackMock = jest.fn();
        //Reset all values for mocks toHaveBeenCalledTimes(), toHaveBeenCalledWith() etc.
        afterEach(() => {
            jest.clearAllMocks();
        });

        it('Mock example invalid', () => {
            const input = '';
            const expected = undefined;

            const actual = toUpperWithCallback(input, callbackMock);

            expect(actual).toBe(expected);

            //Now we can check that the callback function is used in the correct way
            expect(callbackMock).toHaveBeenCalledTimes(1);
            expect(callbackMock).toHaveBeenCalledWith('Invalid str');
        });
        it('Mock example valid', () => {
            const input = 'my_str';
            const expected = 'MY_STR';

            const actual = toUpperWithCallback(input, callbackMock);

            expect(actual).toBe(expected);

            //Now we can check that the callback function is used in the correct way
            expect(callbackMock).toHaveBeenCalledTimes(1);
            expect(callbackMock).toHaveBeenCalledWith('OK');
        });
    });


    describe('class OtherUtils, spies examples', () => {
        //Spies are better suited for classes
        let otherUtils: OtherUtils;

        beforeEach(() => {
            otherUtils = new OtherUtils();
        });

        it('use a spy to track method calls', () => {
            //Create a spy
            //provide a class to spy on and the method name
            const toUpperCaseSpy = jest.spyOn(otherUtils, 'toUpperCase');
            const input = 'my_string';

            otherUtils.toUpperCase(input);

            expect(toUpperCaseSpy).toHaveBeenCalledWith(input);
        });

        it('use a spy to track other modules', () => {
            //Spy can be called on classes and modules
            const consoleLogSpy = jest.spyOn(console, 'log');
            const input = 'my_string';

            //This function calls the console.log inside of it
            otherUtils.logString(input);

            expect(consoleLogSpy).toHaveBeenCalledWith(input);
        });

        it('use a spy to mock a method', () => {
            //Change the method implementation, for example, the request did not succeed
            jest.spyOn(otherUtils, 'externalResourceCall').mockImplementation(() => {
                console.log('This is a mock');
                return null;
            });

            //Now u can use this method farther in the tests
            const resp = otherUtils.externalResourceCall();

            //Use the resp in another methods etc.
        });
    });
});