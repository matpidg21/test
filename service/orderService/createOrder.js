const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');


module.exports = async orderObject => {
    const OrderModel = db.getModel(DB_TABLES.ORDER);
    try {
        const order = await OrderModel.create(orderObject);


        return order && order.Values;
    }catch (e) {
        console.log(e);
    }
};
