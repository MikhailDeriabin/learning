import { Authorizer } from '../../../server_app/auth/Authorizer';
import { RegisterHandler } from '../../../server_app/handlers/RegisterHandler';
import { IncomingMessage, ServerResponse } from 'http';
import { HTTP_CODES, HTTP_METHODS } from '../../../server_app/model/ServerModel';
import { Account } from '../../../server_app/model/AuthModel';

const getRequestBodyMock = jest.fn();
jest.mock('../../../server_app/utils/Utils', () => {
    return {
        getRequestBody: () => getRequestBodyMock()
    }
});

//Here we are injecting mock into class constructor
describe('RegisterHandler test suite', () => {
    let registerHandler: RegisterHandler;
    //Mock implementations of classes
    const request = {
        method: ''
    }
    const response = {
        statusCode: 0,
        writeHead: jest.fn(),
        write: jest.fn()
    }
    const authorizer = {
       registerUser: jest.fn()
    }

    const account: Account = { id: '', userName: 'my_user', password: 'my_password' };
    const accountId = 'my_account_id';

    beforeEach(() => {
        //Injecting these implementations to the constructor
        registerHandler = new RegisterHandler(
            request as any as IncomingMessage, 
            response as any as ServerResponse, 
            authorizer as any as Authorizer
        );
    });
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Should register valid account', async () => {
        //Here we can modify our custom mocks from above
        request.method = HTTP_METHODS.POST;
        getRequestBodyMock.mockResolvedValueOnce(account);
        authorizer.registerUser.mockResolvedValueOnce(accountId);

        await registerHandler.handleRequest();

        expect(response.statusCode).toBe(HTTP_CODES.CREATED);

        expect(response.writeHead).toHaveBeenCalledTimes(1);
        expect(response.writeHead).toHaveBeenCalledWith(HTTP_CODES.CREATED, { 'Content-Type': 'application/json' });

        expect(response.write).toHaveBeenCalledTimes(1);
        expect(response.write).toHaveBeenCalledWith( JSON.stringify({userId: accountId}) );
    });
});