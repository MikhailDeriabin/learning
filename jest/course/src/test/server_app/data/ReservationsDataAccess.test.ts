import { DataBase } from "../../../server_app/data/DataBase";
import { ReservationsDataAccess } from "../../../server_app/data/ReservationsDataAccess";
import { Reservation } from "../../../server_app/model/ReservationModel";

const insertMock = jest.fn();
const updateMock = jest.fn();
const deleteMock = jest.fn();
const getByMock = jest.fn();
const getAllElementsMock = jest.fn();

jest.mock('../../../server_app/data/DataBase', () => {
    return {
        DataBase: jest.fn().mockImplementation(() => {
            return {
                insert: insertMock,
                update: updateMock,
                delete: deleteMock,
                getBy: getByMock,
                getAllElements: getAllElementsMock
            }
        })
    }
});

describe('ReservationsDataAccess test suite', () => {
    const reservation: Reservation = {
        id: "",
        room: "my_room",
        user: "user_1",
        startDate: "12",
        endDate: "15"
    }
    const reservation2: Reservation = {
        id: "",
        room: "my_room2",
        user: "user_2",
        startDate: "20",
        endDate: "29"
    }
    const reservationId = 'my_reservation';

    let reservationDA: ReservationsDataAccess;

    beforeEach(() => {
        reservationDA = new ReservationsDataAccess();

        expect(DataBase).toHaveBeenCalledTimes(1);
    });
    afterEach(() => {
        jest.clearAllMocks()
    });

    it('Should create a reservation', async () => {
        insertMock.mockResolvedValueOnce(reservationId);

        const actual = await reservationDA.createReservation(reservation);

        expect(actual).toBe(reservationId);

        expect(insertMock).toHaveBeenCalledTimes(1);
        expect(insertMock).toHaveBeenCalledWith(reservation);
    });

    const updatingValues: {field: keyof Reservation, value: any}[] = [
        {field: 'room', value: "another_room"},
        {field: 'user', value: "another_user"},
        {field: 'startDate', value: "34"},
        {field: 'endDate', value: "35"}
    ];
    it.each(updatingValues)('Should update $field field with value $value', async ({field, value}) => {
        await reservationDA.updateReservation(reservationId, field, value);

        expect(updateMock).toHaveBeenCalledTimes(1);
        expect(updateMock).toHaveBeenCalledWith(reservationId, field, value);
    });
    

    it('should delete the reservation', async () => {
        await reservationDA.deleteReservation(reservationId);

        expect(deleteMock).toHaveBeenCalledTimes(1);
        expect(deleteMock).toHaveBeenCalledWith(reservationId);
    });

    it('Should return existing reservation', async () => {
        getByMock.mockResolvedValue(reservation);

        const actual = await reservationDA.getReservation(reservationId);

        expect(actual).toEqual(reservation);

        expect(getByMock).toHaveBeenCalledTimes(1);
        expect(getByMock).toHaveBeenCalledWith('id', reservationId);
    });

    it('Should return undefined if nothing found', async () => {
        getByMock.mockResolvedValue(undefined);

        const actual = await reservationDA.getReservation(reservationId);

        expect(actual).toBeUndefined();

        expect(getByMock).toHaveBeenCalledTimes(1);
        expect(getByMock).toHaveBeenCalledWith('id', reservationId);
    });

    it('Should get all found reservations', async () => {
        const expected = [reservation, reservation2];
        getAllElementsMock.mockResolvedValue(expected);

        const actual = await reservationDA.getAllReservations();

        expect(actual).toEqual(expected);

        expect(getAllElementsMock).toHaveBeenCalledTimes(1);
        expect(getAllElementsMock).toHaveBeenCalledWith();
    });
});