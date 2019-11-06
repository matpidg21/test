const {orderService} = require('../../service');
const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = async (req, res) => {
    try {
        const {user_id} = req.user;
        const {product_id, count} = req.body;

        const UserModel = db.getModel(DB_TABLES.USER);
        const [recipients] = await UserModel.findAll({
            where: {
                type_id: 3
            },
            attributes: ['email']
        });

        await orderService.createOrder({user_id, product_id, count, recipient: recipients.email});

        res.send('add order')
    } catch (e) {
        console.log(e);
    }
};
