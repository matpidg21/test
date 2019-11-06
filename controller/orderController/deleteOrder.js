const {orderService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const {user_id} = req.user;

        await orderService.deleteOrder(user_id);

        res.end('delete user')
    } catch (e) {
        console.log(e);
    }
};
