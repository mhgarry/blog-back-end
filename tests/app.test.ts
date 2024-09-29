import request from 'supertest';
import app from '../src/app';

// test the basic functionality of the API route
describe('GET /api/', () => {
    it('should respond with a 200 status code and a JSON object', async () => {
        const response = await request(app).get('/api/');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Hello World!' });
    });
});
