import { Server } from "../../server_app/server/Server";
import RequestTestWrapper from "./test_utils/RequestTestWrapper";
import ResponseTestWrapper from "./test_utils/ResponseTestWrapper";
import { HTTP_CODES, HTTP_METHODS } from '../../server_app/model/ServerModel';
import { DataBase } from "../../server_app/data/DataBase";

jest.mock("../../server_app/data/DataBase");

const requestWrapper = new RequestTestWrapper();
const responseWrapper = new ResponseTestWrapper();

const fakeServer = {
    listen: () => {},
    close: () => {}
}

jest.mock('http', () => {
    return {
        createServer: (callback: Function) => {
            callback(requestWrapper, responseWrapper);
            return fakeServer;
        }
    }
});

describe('Register requests test suite', () => {
    afterEach(() => {
        requestWrapper.clearAllFields();
        responseWrapper.clearAllFields();
    });

    it('should register new users', async () => {
        requestWrapper.method = HTTP_METHODS.POST;
        requestWrapper.body = {
            userName: 'mu_user',
            password: 'myPassword1?'
        }
        requestWrapper.url = 'localhost:8080/register';
        jest.spyOn(DataBase.prototype, 'insert').mockResolvedValueOnce('my_id');

        await new Server().startServer();

        //Solves error in timing
        await new Promise(process.nextTick); 

        expect(responseWrapper.statusCode).toBe(HTTP_CODES.CREATED);
        expect(responseWrapper.body).toEqual(expect.objectContaining({
            userId: expect.any(String)
        }));
    });

    it('should not register new user if validation fails', async () => {
        requestWrapper.method = HTTP_METHODS.POST;
        requestWrapper.body = {};
        requestWrapper.url = 'localhost:8080/register';

        await new Server().startServer();

        //Solves error in timing
        await new Promise(process.nextTick); 

        expect(responseWrapper.statusCode).toBe(HTTP_CODES.BAD_REQUEST);
        expect(responseWrapper.body).toBe('userName and password required');
    });
});