import { getRequestBody } from "../../../server_app/utils/Utils";
import { IncomingMessage } from 'http';

const requestMock = {
    on: jest.fn()
}

const obj = {
    name: 'John',
    age: 30,
    city: 'Paris'
}

const stringifiedObj = JSON.stringify(obj);

describe('Utils test suite', () => {
    it('Should return object for valid JSON', async () => {
        requestMock.on.mockImplementation((event, callback) => {
            if(event === 'data'){
                callback(stringifiedObj);
                return;
            } 

            callback();
        });

        const actual = await getRequestBody(requestMock as any as IncomingMessage);

        expect(actual).toEqual(obj);
    });

    it('Should throw error for invalid JSON', async () => {
        requestMock.on.mockImplementation((event, callback) => {
            if(event === 'data'){
                callback('a' + stringifiedObj);
                return;
            } 

            callback();
        });

        await expect(getRequestBody(requestMock as any)).rejects.toThrow("Unexpected token 'a', \"a{\"name\":\"\"... is not valid JSON");
    });

    it('Should throw unexpected error', async () => {
        const error = new Error('Something went wrong!');
        requestMock.on.mockImplementation((event, callback) => {
            if(event === 'error')
                callback(error);
        });

        await expect(getRequestBody(requestMock as any)).rejects.toThrow(error.message);
    });
});