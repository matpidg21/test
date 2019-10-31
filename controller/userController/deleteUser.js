const {userService,oauthService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const token = req.get('Authorization');
        // const {email,password} = req.body;
        const {user_id} = req.user;

        token.user_id = user_id;
        await userService.deleteUser({id:user_id});
        // await userService.deleteUser({email, password});

        res.end('ok')
    } catch (e) {
        console.log(e);
    }
};
