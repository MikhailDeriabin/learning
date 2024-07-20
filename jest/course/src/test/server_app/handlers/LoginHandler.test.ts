import { Authorizer } from "../../../server_app/auth/Authorizer";
import { LoginHandler } from "../../../server_app/handlers/LoginHandler";
import { IncomingMessage, ServerResponse } from 'http';
import { HTTP_CODES, HTTP_METHODS } from "../../../server_app/model/ServerModel";
import  * as getRequestBody from "../../../server_app/utils/Utils";
import { Account } from "../../../server_app/model/AuthModel";

describe('LoginHandler test suite', () => {
    let loginHandler: LoginHandler;

    const request = {
        method: ''
    }
    const response = {
        statusCode: 0,
        writeHead: jest.fn(),
        write: jest.fn()
    }
    const authorizer = {
        login: jest.fn()
    }

    const account: Account = {
        id: "",
        userName: "my_user",
        password: "my_password"
    }
    const token = 'my_token';

    beforeEach(() => {
        loginHandler = new LoginHandler(
            request as any as IncomingMessage, 
            response as any as ServerResponse, 
            authorizer as any as Authorizer
        );
    });
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Should login the the existing user', async () => {
        request.method = HTTP_METHODS.POST;
        jest.spyOn(getRequestBody, 'getRequestBody').mockResolvedValueOnce(account);
        authorizer.login.mockResolvedValueOnce(token);

        await loginHandler.handleRequest();

        expect(response.statusCode).toBe(HTTP_CODES.CREATED);

        expect(response.writeHead).toHaveBeenCalledWith(HTTP_CODES.CREATED, { 'Content-Type': 'application/json' });
        expect(response.write).toHaveBeenCalledWith(JSON.stringify({token}));
    });

    it('Should set NOT_FOUND for a non-existing user', async () => {
        request.method = HTTP_METHODS.POST;
        jest.spyOn(getRequestBody, 'getRequestBody').mockResolvedValueOnce(account);
        authorizer.login.mockResolvedValueOnce(null);

        await loginHandler.handleRequest();

        expect(response.statusCode).toBe(HTTP_CODES.NOT_fOUND);
        
        expect(response.write).toHaveBeenCalledWith(JSON.stringify('wrong username or password'));
        expect(response.writeHead).toHaveBeenCalledTimes(0);
    });
});