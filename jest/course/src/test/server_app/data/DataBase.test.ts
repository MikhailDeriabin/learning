import { DataBase } from '../../../server_app/data/DataBase';
import * as RandomGenerator from '../../../server_app/data/IdGenerator';

type TTesting = {
    id: string,
    color: string,
    name: string
}

describe('DataBase test suit', () => {
    let dataBase: DataBase<TTesting>;

    const obj1: TTesting = {
        id: 'my_id',
        name: 'my_name',
        color: 'white'
    }
    const obj2: TTesting = {
        id: 'my_id',
        name: 'my_name',
        color: 'white'
    }

    beforeEach(() => {
        dataBase = new DataBase();
    });

    it('should return id after adding new object', async () => {
        const input = {id: 'my_id'} as any;
        const expected = 'my_rand_id';
        jest.spyOn(RandomGenerator, 'generateRandomId').mockReturnValue(expected);

        const actual = await dataBase.insert(input);

        expect(actual).toBeDefined();
    });

    it('Should get object after adding', async () => {
        const id = await dataBase.insert(obj1);
        const expected = {...obj1, id};

        const actual = await dataBase.getBy('id', id);

        expect(actual).toMatchObject(expected);
    });

    it('Should find all inserted objects', async () => {
        await dataBase.insert(obj1);
        await dataBase.insert(obj2);
        const expected = [obj1, obj2];

        const actual = await dataBase.findAllBy('color', obj1.color);

        expect(actual).toEqual(expected);
    });

    it('should update existing element', async () => {
        const id = await dataBase.insert({...obj1});
        const expected = {...obj1, id, name: 'John'};

        await dataBase.update(id, 'name', 'John');
        const actual = await dataBase.getBy('id', id);

        expect(actual).toEqual(expected);
    });

    it('Should delete existing object', async () => {
        const id = await dataBase.insert(obj1);

        await dataBase.delete(id);
        const actual = await dataBase.getBy('id', id);

        expect(actual).toBeUndefined();
    });

    it('Should find all created', async () => {
        await dataBase.insert(obj1);
        await dataBase.insert(obj2);
        const expected = [obj1, obj2];
        const expectedLength = expected.length;

        const actual = await dataBase.getAllElements();

        expect(actual.length).toBe(expectedLength);
        expect(actual).toEqual(expected);
    });
});