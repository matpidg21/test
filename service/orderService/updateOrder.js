const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');


module.exports = (updateObject, user_id) => {
    const OrderModel = db.getModel(DB_TABLES.ORDER);
    try {
        OrderModel.update(updateObject, {
            where: {
                recipient_id: user_id
            }
        })

    } catch (e) {
        console.log(e);
    }
};



