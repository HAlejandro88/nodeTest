const request  = require('supertest');
const app = require('../index');


describe('testing products apis', () => {
    test('respond with json products', async done => {
        const response = await request(app).get('/api/v1/products');
        expect(response.status).toBe(200);
        expect(response.body.msg).toBe('all products send');
        expect(response.body.products).toEqual([ 'potatoes', 'apples', 'cherry', 'banana' ]);
        done();
    });

    test('testing post with array', async done => {
        const response = await request(app).post('/api/v1/products').send('cheesecake');
        expect(response.status).toBe(201);
        expect(response.body.products).toEqual([ 'potatoes', 'apples', 'cherry', 'banana', {} ]);
        done();
    })
})
