const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Auth user', () => {
    it('should return 200 and token for valid credentials', (done) => {
        const valid_input = {
            "email": "1",
            "password": "1"
        };
        chai.request(app)
            .post('/auth')
            .send(valid_input)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    })
});
