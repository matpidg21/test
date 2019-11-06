const {userService} = require('../../service');


module.exports = async (req, res) => {
    try {
        const userUpdate = req.body;
        const {user_id} = req.user;


        await userService.updateUser(userUpdate, user_id);

        res.send('Update user!')
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
