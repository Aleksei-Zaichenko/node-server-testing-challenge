const request = require('supertest');
const server = require('./server');

const db = require('../data/dbConfig');

describe('server', () => {

    describe('GET /', ()=>{
        it('should return status 200', () =>{
            return request(server).get('/')
                .then(res =>{
                    expect(res.status).toBe(200);
                })
        })
    })

    describe('POST /employees', ()=>{
        it('should return message: employee was added successfully', async () => {

            // const employeeProperties = {name: 'Brianna', department:'fast-food'};

            // const doesExist = await db('employees').where({name: employeeProperties.name});
            // expect(doesExist).toHaveLength(0);

            return request(server).post('/employees')
                    .send({name: 'Brianna', department:'fast-food'})
                    .then(res =>{
                        expect(res.body.message).toBe('employee was added successfully');
                    })
        })
    })
})