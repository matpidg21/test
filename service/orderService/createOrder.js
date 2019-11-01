const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');


module.exports = orderObject => {
    const OrderModel = db.getModel(DB_TABLES.ORDER);

    OrderModel.create(orderObject);
};
