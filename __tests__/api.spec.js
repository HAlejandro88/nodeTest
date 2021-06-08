const request  = require('supertest');
const mongoose =  require('mongoose')
const {app, server} = require('../index');


// Testing get all users endpoint

describe('test all endpoint of users', () => {

    afterAll(() => {
        mongoose.connection.close()
        return server.close()
    })

    test('respond with json content', done => {
        request(app)
            .get('/api/v1/users')
            .set('Accept', 'application/json')
            //.expect('Content-Type', /json/)
            .expect(200, done);
    });

    test('test route with parameters', done => {
        request(app)
            .get('/api/v1/users/user1')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(err => {
                if (err) return done(err);
                done();
            });;
    });


   test('response with json with user not found', done => {
       request(app)
           .get('/api/v1/users/user2')
           .set('Accept', 'application/json')
           .expect('Content-Type', /json/)
           .expect(404)
           .expect('"usuario incorrecto"')
           .end(err => {
               if (err) return done(err);
               done();
           });
   });

   test('response with object json with user', done => {
       request(app)
           .get('/api/v1/users/user1')
           .set('Accept', 'application/json')
           .expect('Content-Type', /json/)
           .expect(200)
           .expect('{"success":true,"msg":"usuario encontrado"}')
           .end(err => {
               if (err) return done(err);
               done();
           });
   })

});

describe('test post routes', () => {
    afterAll(() => {

       return server.close()
    })

    test('response with 201 with add created', done => {
        const data = { username: 'Alex', password: 12345678 }
        request(app)
            .post('/api/v1/users')
            .send( data )
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .expect('{"success":true,"msg":"users created"}')
            .end(err => {
                if (err) return done(err)
                done();
            })
    })

    test('response error with the body no its correct', done => {
        const data = { username: 'hells' };
        request(app)
            .post('/api/v1/users')
            .send( data )
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect('{"success":false,"msg":"users not created"}')
            .end(err => {
                if (err) return done(err);
                done();
            })
    })
})

