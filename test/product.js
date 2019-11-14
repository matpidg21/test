const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

let access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM2ODI3OTcsImV4cCI6MTU3Mzc2OTE5N30.mKJlUEwhKb2Ocpft6BS0AXPWcMDNugN0AHyYeqCx7pM";


describe('/GET product', () => {
    it('it should GET all the products ', (done) => {
        chai.request(app)
            .get('/product/all')
            .set("Authorization", access_token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                // res.body.length.should.to.eql(0);
                done();
            })
    });
});

describe('/POST product', () => {
    it('it should  POST crate product', (done) => {
        let product = {
            name: "potato",
            user_id: 83,
            description: "potato is vary good ",
            price: 12,
            wight: 23
        };

        chai.request(app)
            .post('/product')
            .set("Authorization", access_token)
            .send(product)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.have.be.a('object');
                done();
            })
    })
});

describe('/DELETE product', () => {
    it('it should DELETE product given the token', (done) => {
        chai.request(app)
            .delete('/product/delete')
            .set("Authorization", access_token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
    })
});
