const {userService} = require('../../service');


module.exports = async (req, res) => {
    try {
        const token = req.get('Authorization');
        const user = req.body;
        // const {email,password} = req.body;
        const {user_id} = req.user;

        token.user_id = user_id;

        await userService.deleteUser({user}, {id: user_id});

    } catch (e) {
        console.log(e);
        res
            .status(e.status)
            .json({
                message: e.message,
                controller: e.controller
            })
    }
};
