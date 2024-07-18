import { UserCredentialsDataAccess } from "../../../server_app/data/UserCredentialsDataAccess";
import { DataBase } from '../../../server_app/data/DataBase';
import { Account } from "../../../server_app/model/AuthModel";

const insertMock = jest.fn();
const getByMock = jest.fn();

//TODO: write tests for all other classes in the data folder

//Mocking a consumer class, since it is not injected into the constructor
//and we want to control the implementation of it
//The DataBase is constructor function name, so we are mocking the whole class implementation (its constructor function)
jest.mock('../../../server_app/data/DataBase', () => {
    return {
        DataBase: jest.fn().mockImplementation(() => {
            return {
                insert: insertMock,
                getBy: getByMock
            }
        }) 
    }
});

describe('UserCredentialsDataAccess test suite', () => {
    let userCredentials: UserCredentialsDataAccess;

    const account: Account = {
        id: '',
        userName: 'my_username',
        password: 'password'
    }
    const accountId = 'account_id';

    beforeEach(() => {
        userCredentials = new UserCredentialsDataAccess();

        //Check that the DataBase constructor is called and only once, each time we are creating the UserCredentialsDataAccess
        expect(DataBase).toHaveBeenCalledTimes(1);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Should create a new user', async () => {
        //Since we are not testing here the DataBase class, but we are testing how the UserCredentialsDataAccess is using it
        //We can mock the whole DataBase and its methods
        //So here the userCredentials needs only a returned account id from the DataBase.insert() => we give that id
        insertMock.mockResolvedValueOnce(accountId);
        
        const createdAccountId = await userCredentials.addUser(account);

        //Now we actually check how the UserCredentialsDataAccess is using the DataBase class.
        //Does it actually returns the accountId from our mock function or not
        expect(createdAccountId).toBe(accountId);
        expect(insertMock).toHaveBeenCalledWith(account);
        expect(insertMock).toHaveBeenCalledTimes(1);
    });

    it('should find existing user by id', async () => {
        getByMock.mockResolvedValueOnce(account);

        const actual = await userCredentials.getUserById(accountId);

        expect(actual).toEqual(account);
        expect(getByMock).toHaveBeenCalledWith('id', accountId);
        expect(getByMock).toHaveBeenCalledTimes(1);
    });

    it('should find existing user by username', async () => {
        getByMock.mockResolvedValueOnce(account);

        const actual = await userCredentials.getUserByUserName(account.userName);

        expect(actual).toEqual(account);
        expect(getByMock).toHaveBeenCalledWith('userName', account.userName);
        expect(getByMock).toHaveBeenCalledTimes(1);
    });
});