const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

describe('Server', () => {
    it('should return response', (done) => {
        request(app)
            .get('/')
            .expect('Hello World')
            .end(done)
    })

    it('should return users', (done) => {
        request(app)
            .get('/users')
            .expect({
                name: 'Joydeep Maiti',
                age: 21,
                location: 'kolkata'
            })
            .end(done)
    });
});
