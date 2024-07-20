import { IncomingMessage, ServerResponse } from 'http';
import { Authorizer } from '../../../server_app/auth/Authorizer';
import { ReservationsDataAccess } from '../../../server_app/data/ReservationsDataAccess';
import * as UtilsModule from '../../../server_app/utils/Utils';
import { ReservationsHandler } from '../../../server_app/handlers/ReservationsHandler';
import { HTTP_CODES, HTTP_METHODS } from '../../../server_app/model/ServerModel';
import { Reservation } from '../../../server_app/model/ReservationModel';

describe('ReservationsHandler test suite', () => {
    let handler: ReservationsHandler;

    const request = {
        method: '',
        url: '',
        headers: {
            authorization: '',
        }
    }
    const response = {
        statusCode: 0,
        write: jest.fn(),
        writeHead: jest.fn()
    }
    const authorizer= {
        validateToken: jest.fn()
    }
    const reservationsDataAccess= {
        createReservation: jest.fn(),
        getAllReservations: jest.fn(),
        getReservation: jest.fn(),
        updateReservation: jest.fn(),
        deleteReservation: jest.fn()
    }

    const reservation: Reservation = {
        id: '',
        room: 'my_room',
        user: 'my_user',
        startDate: '12',
        endDate: '13'
    }
    const reservation2: Reservation = {
        id: '',
        room: 'my_room2',
        user: 'my_user2',
        startDate: '34',
        endDate: '78'
    }
    const token = 'my_token';
    const reservationId = 'my_reservation_id';

    beforeEach(() => {
        request.headers.authorization = token;
        authorizer.validateToken.mockResolvedValue(true);

        handler = new ReservationsHandler(
            request as any as IncomingMessage,
            response as any as ServerResponse,
            authorizer as any as Authorizer,
            reservationsDataAccess as any as ReservationsDataAccess
        );
    });
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Should set UNAUTHORIZED if user is not authenticated', async () => {
        authorizer.validateToken.mockResolvedValue(false);

        await handler.handleRequest();

        expect(response.statusCode).toBe(HTTP_CODES.UNAUTHORIZED);

        expect(response.write).toHaveBeenCalledWith(JSON.stringify('Unauthorized operation!'));
    });

    it('Should create a reservation', async () => {
        request.method = HTTP_METHODS.POST;
        jest.spyOn(UtilsModule, 'getRequestBody').mockResolvedValueOnce(reservation);
        reservationsDataAccess.createReservation.mockResolvedValueOnce(reservationId);

        await handler.handleRequest();

        expect(response.statusCode).toBe(HTTP_CODES.CREATED);
        expect(response.writeHead).toHaveBeenCalledWith(HTTP_CODES.CREATED, { 'Content-Type': 'application/json' });
        expect(response.write).toHaveBeenCalledWith(JSON.stringify({ reservationId }));
    });

    it('Should find all reservations', async () => {
        request.method = HTTP_METHODS.GET;
        request.url = '/reservations/all';
        const dbResp = [reservation, reservation2]
        reservationsDataAccess.getAllReservations.mockResolvedValueOnce(dbResp);

        await handler.handleRequest();

        expect(response.writeHead).toHaveBeenCalledWith(HTTP_CODES.OK, { 'Content-Type': 'application/json' });
        expect(response.write).toHaveBeenCalledWith(JSON.stringify(dbResp));
    });

    it('Should find a reservation by id', async () => {
        request.method = HTTP_METHODS.GET;
        request.url = `/reservations/${reservationId}`;
        const dbResp = reservation;
        reservationsDataAccess.getReservation.mockResolvedValueOnce(dbResp);

        await handler.handleRequest();

        expect(reservationsDataAccess.getReservation).toHaveBeenCalledWith(reservationId);
        expect(response.writeHead).toHaveBeenCalledWith(HTTP_CODES.OK, { 'Content-Type': 'application/json' });
        expect(response.write).toHaveBeenCalledWith(JSON.stringify(dbResp));
    });

    it('Should update a reservation by id', async () => {
        request.method = HTTP_METHODS.PUT;
        request.url = `/reservations/${reservationId}`;
        const dbResp: Reservation = {...reservation, id: reservationId};
        reservationsDataAccess.getReservation.mockResolvedValueOnce(dbResp);
        jest.spyOn(UtilsModule, 'getRequestBody').mockResolvedValueOnce(dbResp);

        await handler.handleRequest();

        
        for(const property in dbResp){
            expect(reservationsDataAccess.updateReservation).toHaveBeenCalledWith(reservationId, property, dbResp[property as keyof Reservation]);
        }
        expect(response.writeHead).toHaveBeenCalledWith(HTTP_CODES.OK, { 'Content-Type': 'application/json' });
        expect(response.write).toHaveBeenCalledWith(JSON.stringify(`Updated ${Object.keys(dbResp)} of reservation ${reservationId}`));
    });

    it('Should find a reservation by id', async () => {
        request.method = HTTP_METHODS.DELETE;
        request.url = `/reservations/${reservationId}`;

        await handler.handleRequest();

        expect(response.statusCode).toBe(HTTP_CODES.OK);

        expect(reservationsDataAccess.deleteReservation).toHaveBeenCalledWith(reservationId);
        expect(response.write).toHaveBeenCalledWith(JSON.stringify(`Deleted reservation with id ${reservationId}`));
    });
});