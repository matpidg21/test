const {userService} = require('../../service');


module.exports = async (req, res) => {
    try {
        const {name, id} = req.body;

        await userService.deleteUser({name} ,id);

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
