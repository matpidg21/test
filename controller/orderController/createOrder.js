const {orderService} = require('../../service');


module.exports = async (req, res) => {
    try {
        const {user_id, id} = req.user;

        const addOrder = await orderService.createOrder({user_id, product_id: id});

        res.json(addOrder)
    } catch (e) {
        console.log(e);
    }
};
