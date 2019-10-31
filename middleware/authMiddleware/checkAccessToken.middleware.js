const {tokenVereficator} = require('../../helpers');

module.exports = async (req, res, next) => {
    const token = req.get('Authorization');

    if (!token) {
        throw new Error('Not token')
    }

    tokenVereficator(token);

    next()
};


