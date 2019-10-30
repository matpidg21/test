const {oauthService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const token = req.get('Authorization');


        await oauthService.deleteTokenByParams({access_token:token});
        res.end('ok')
    } catch (e) {
        console.log(e);
    }
};
