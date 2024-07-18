//Mocking the whole module
//Notice that now all methods, functions will be return undefined, because they are not mocked by us
jest.mock('../../../src/doubles/OtherUtils', () => {
    //Here we can mock, what we need 
    return {
        //We also can get all implementations 
        ...jest.requireActual('../../../src/doubles/OtherUtils'),
        //And mock what we need
        calculateComplexity: () => 0
    }
});


//In the toLowerCaseAndAddRandomId() we use a randomly generated uuid, we can not guess what it can be => we can mock its implementation too
//Since this id is coming from external lib, we can mock it too
jest.mock('uuid', () => {
    return {
        v4: () => 'my_random_id'
    }
});

import * as OtherUtils from "../../../src/doubles/OtherUtils";

describe('modules mocking', () => {
    it('calculateComplexity() should return zero for empty object', () => {
        const input = { extraInfo: {}, length: 2 } as any;
        const expected = 0;

        const actual = OtherUtils.calculateComplexity(input);

        expect(actual).toBe(expected);
    });

    it('toLowerCaseAndAddRandomId() should return lower case and random string concatenated', () => {
        const input = 'my_string';
        //Now we now what the "random" uuid will be, since we mock it
        const expected = 'my_stringmy_random_id';

        const actual = OtherUtils.toLowerCaseAndAddRandomId(input);

        expect(actual).toBe(expected);
    });
});