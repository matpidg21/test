const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../constant');


module.exports = () => {
    const access_token = jwt.sign({}, JWT_SECRET.ACCESS, {expiresIn: '24h'});
    const refresh_token = jwt.sign({}, JWT_SECRET.REFRESH, {expiresIn: '96h'});
    // 24, 96 => config

    return {
        access_token,
        refresh_token
    }
};
