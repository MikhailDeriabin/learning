import { DataBase } from "../../../server_app/data/DataBase";
import { SessionTokenDataAccess } from "../../../server_app/data/SessionTokenDataAccess";
import { Account, SessionToken } from "../../../server_app/model/AuthModel";


const insertMock = jest.fn();
const updateMock = jest.fn();
const getByMock = jest.fn();

jest.mock('../../../server_app/data/DataBase', () => {
    return {
        DataBase: jest.fn().mockImplementation(() => {
            return {
                insert: insertMock,
                update: updateMock,
                getBy: getByMock
            }
        })
    }
});

describe('SessionTokenDataAccess test suite', () => {
    let sessionTokenDA: SessionTokenDataAccess;
    const account: Account = { id: '', userName: 'my_user', password: 'my_password' };
    const tokenId = 'my_id';

    beforeEach(() => {
        sessionTokenDA = new SessionTokenDataAccess();

        expect(DataBase).toHaveBeenCalledTimes(1);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Should generate a token', async () => {
        const inputDate = new Date();
        const dbInput: SessionToken = { id: '', userName: account.userName, valid: true, expirationDate: inputDate }

        insertMock.mockResolvedValueOnce(tokenId);
        jest.spyOn(sessionTokenDA as any, 'generateExpirationTime').mockReturnValueOnce(inputDate);
        const consoleSpy = jest.spyOn(console, 'log');

        const actual = await sessionTokenDA.generateToken(account);

        expect(actual).toBe(tokenId);

        expect(insertMock).toHaveBeenCalledTimes(1);
        expect(insertMock).toHaveBeenCalledWith(dbInput);
        expect(consoleSpy).toHaveBeenCalledTimes(1);
        expect(consoleSpy).toHaveBeenCalledWith(`Inserting ${tokenId} into the database`);
    });

    it('Should invalidate token', async () => {
        await sessionTokenDA.invalidateToken(tokenId);

        expect(updateMock).toHaveBeenCalledTimes(1);
        expect(updateMock).toHaveBeenCalledWith(tokenId, 'valid', false);
    });

    it('Should return true for valid token validity', async () => {
        const validToken: SessionToken = {
            id: tokenId,
            userName: account.userName,
            valid: true,
            expirationDate: new Date()
        }

        getByMock.mockResolvedValueOnce(validToken);
        const consoleSpy = jest.spyOn(console, 'log');

        const actual = await sessionTokenDA.isValidToken(tokenId);

        expect(actual).toBe(true);

        expect(consoleSpy).toHaveBeenCalledTimes(1);
        expect(consoleSpy).toHaveBeenCalledWith(`Quering for ${tokenId} into the database`);
        expect(getByMock).toHaveBeenCalledTimes(1);
        expect(getByMock).toHaveBeenCalledWith('id', tokenId);
    });
    it('Should return false for invalid token', async () => {
        const invalidToken: SessionToken = {
            id: tokenId,
            userName: account.userName,
            valid: false,
            expirationDate: new Date()
        }

        const consoleSpy = jest.spyOn(console, 'log');
        getByMock.mockResolvedValueOnce(invalidToken);

        const actual = await sessionTokenDA.isValidToken(tokenId);

        expect(actual).toBe(false);
        
        expect(consoleSpy).toHaveBeenCalledTimes(1);
        expect(consoleSpy).toHaveBeenCalledWith(`Quering for ${tokenId} into the database`);
        expect(getByMock).toHaveBeenCalledTimes(1);
        expect(getByMock).toHaveBeenCalledWith('id', tokenId);
    });
    it('Should return false for non-existing token', async () => {
        getByMock.mockResolvedValueOnce(null);
        const consoleSpy = jest.spyOn(console, 'log');

        const actual = await sessionTokenDA.isValidToken(tokenId);

        expect(actual).toBe(false);

        expect(consoleSpy).toHaveBeenCalledTimes(1);
        expect(consoleSpy).toHaveBeenCalledWith(`Quering for ${tokenId} into the database`);
        expect(getByMock).toHaveBeenCalledTimes(1);
        expect(getByMock).toHaveBeenCalledWith('id', tokenId);
    });
});