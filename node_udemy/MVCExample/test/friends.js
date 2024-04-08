//Using Mocha as testing library
//Supertest makes API requests easier and works with different testing libraries
//run mocha tests with mocha command

const request = require('supertest');
const app = require('../server');

const basePath = '/friends';
describe('GET /friends', function ()  {
    it('Should respond with 200 status code', function (done){
        request(app)
            .get(basePath)
            .expect('Content-Type', /json/)
            .expect(200, done); //make sure to call done function in the end
    });
});