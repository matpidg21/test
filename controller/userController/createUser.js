const {userService} = require('../../service');


module.exports = async (req, res, next) =>{
    try {
        const user = req.body;
        // if(!user.name || !user.email || !user.password || !user.phone_number || !user.type_id){
        //     return next(new Error('Enter all fields!'))
        // }
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
