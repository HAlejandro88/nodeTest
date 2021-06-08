const request  = require('supertest');
const Product = require('../models/Product.model')
const {app, server} = require('../index');




describe('testing products apis', () => {

    const inilialProduct = [
        {
            name: 'Potatoe',
            quantity: 5,
            price: 10,
            top: true
        },
        {
            name: 'apple',
            quantity: 10,
            price: 5,
            top: false
        },
        {
            name: 'banana',
            quantity: 1,
            price: 20,
            top: true
        }
    ]

    afterAll(() => {
        return server.close()
    });

    beforeEach(async () => {
        await Product.deleteMany({});

        const productOne = new Product(inilialProduct[0])
        await productOne.save();

        const productTwo = new Product(inilialProduct[1]);
        await productTwo.save()
    })

    test('respond with json products', async done => {
        const response = await request(app).get('/api/v1/products');
        expect(response.status).toBe(200);
        expect(response.body.msg).toBe('all products send');
        //expect(response.body.products).toEqual([ 'potatoes', 'apples', 'cherry', 'banana' ]);
        expect(response.body.products).toHaveLength(2);
        done();
    });

    test('testing post with array', async done => {
        const response = await request(app).post('/api/v1/products').send(inilialProduct[2]);
        expect(response.status).toBe(201);
        //expect(response.body.products).toEqual([ 'potatoes', 'apples', 'cherry', 'banana', {} ]);
        expect(response.body.products.name).toBe(inilialProduct[2].name);
        done();
    })
})
