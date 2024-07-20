import { Authorizer } from '../../../server_app/auth/Authorizer';
import { LoginHandler } from '../../../server_app/handlers/LoginHandler';
import { RegisterHandler } from '../../../server_app/handlers/RegisterHandler';
import { ReservationsHandler } from '../../../server_app/handlers/ReservationsHandler';
import { Server } from '../../../server_app/server/Server';
import { ReservationsDataAccess } from '../../../server_app/data/ReservationsDataAccess';

//We do not need to implement mocks, we are just checking that the are in use here
jest.mock('../../../server_app/auth/Authorizer');
jest.mock('../../../server_app/data/ReservationsDataAccess');
jest.mock('../../../server_app/handlers/LoginHandler');
jest.mock('../../../server_app/handlers/RegisterHandler');
jest.mock('../../../server_app/handlers/ReservationsHandler');

const reqMock = {
    url: '',
    headers: {
        'user-agent': 'my_agent'
    }
}
const resMock = {
    end: jest.fn(),
    writeHead: jest.fn()
}
const serverMock = {
    listen: jest.fn(),
    close: jest.fn()
}

jest.mock('http', () => {
    return {
        createServer: (callback: Function) => {
            callback(reqMock, resMock);
            return serverMock;
        }
    }
});

describe('Server test suite', () => {
    let server: Server;

    beforeEach(() => {
        server = new Server();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Should start server on port 8080 and end the request', async () => {
        await server.startServer();

        expect(resMock.end).toHaveBeenCalledTimes(1);
        expect(serverMock.listen).toHaveBeenCalledTimes(1);
        expect(serverMock.listen).toHaveBeenCalledWith(8080);
    });

    it('Should handle register request', async () => {
        reqMock.url = 'localhost:8080/register';
        //Spy on class methods
        const handleRequestSpy = jest.spyOn(RegisterHandler.prototype, 'handleRequest');
        await server.startServer();

        expect(handleRequestSpy).toHaveBeenCalledTimes(1);
        expect(RegisterHandler).toHaveBeenCalledWith(reqMock, resMock, expect.any(Authorizer));
    });

    it('Should handle login request', async () => {
        reqMock.url = 'localhost:8080/login';
        const handleRequestSpy = jest.spyOn(LoginHandler.prototype, 'handleRequest');
        await server.startServer();

        expect(handleRequestSpy).toHaveBeenCalledTimes(1);
        expect(LoginHandler).toHaveBeenCalledWith(reqMock, resMock, expect.any(Authorizer));
    });

    it('Should handle reservation request', async () => {
        reqMock.url = 'localhost:8080/reservation';
        //Spy on class methods
        const handleRequestSpy = jest.spyOn(ReservationsHandler.prototype, 'handleRequest');
        await server.startServer();

        expect(handleRequestSpy).toHaveBeenCalledTimes(1);
        expect(ReservationsHandler).toHaveBeenCalledWith(reqMock, resMock, expect.any(Authorizer), expect.any(ReservationsDataAccess));
    });
});