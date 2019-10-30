const {userService,oauthService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const token = req.get('Authorization');
        const {email,password} = req.body;

        await oauthService.deleteTokenByParams({access_token:token});
        await userService.deleteUser({email, password});

        res.end('ok')
    } catch (e) {
        console.log(e);
    }
};
