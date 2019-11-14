const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
let should = chai.should();

chai.use(chaiHttp);
//
// describe('User', () => {
//     beforeEach((done) => {
//         UserModel.remove({}, (err) => {
//             done();
//         });
//     });
// });

let access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM2ODI3OTcsImV4cCI6MTU3Mzc2OTE5N30.mKJlUEwhKb2Ocpft6BS0AXPWcMDNugN0AHyYeqCx7pM";

describe('/GET user', () => {
    //TODO доробити
    it('it should GET all the user ', (done) => {
        chai.request(app)
            .get('/users/all')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                // res.body.length.should.to.eql(6);
                done();
            });
    });
});

describe('/POST User', () => {
    it('it should not POST a product without wight phone_number', (done) => {
        let user = {
            name: "1",
            email: "1",
            password: "1",
            phone_number: 1,
            type_id: 3
        };

        chai.request(app)
            .post('/users')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.be.a('object');
                // res.body.should.have.property('message').eql('User successfully added!');
                // res.body.user.should.have.property('name');
                // res.body.user.should.have.property('email');
                // res.body.user.should.have.property('password');
                // res.body.user.should.have.property('phone_number');
                // res.body.user.should.have.property('type_id');
                done();
            })
    })
});

describe('/DELETE user', () =>{
    it('it shout DELETE user give token', (done) =>{
        chai.request(app)
            .delete('/users/delete')
            .set("Authorization", access_token)
            .end(((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
                console.log(err);

            }))
    })
});

describe('/UPDATE user', () =>{
    it('it shout UPDATE user give token' ,(done) =>{
        chai.request(app)
            .put('/users/update')
            .set("Authorization", access_token)
            .send({ phone_number: 1111})
            .end(((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            }))
    })
});
