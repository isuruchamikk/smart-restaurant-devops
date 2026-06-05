// JavaScript source code
const request = require('supertest');
const app = require('../app');

describe('Smart Restaurant App', () => {

    test('GET / should return application message', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });

    test('GET /health should return OK', async () => {
        const response = await request(app).get('/health');
        expect(response.text).toBe('OK');
    });

});