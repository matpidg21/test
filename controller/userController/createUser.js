const {userService} = require('../../service');


module.exports = async (req, res) =>{
    try {
        const user = req.body;
        const myUser  = await userService.createUser(user);

        res.json(myUser)

    }catch (e) {
        console.log(e);
        res
            .status(e.status)
            .json({
                message: e.message,
                controller: e.controller
            })
    }
};
