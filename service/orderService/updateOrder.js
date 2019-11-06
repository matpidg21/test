const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');


module.exports = (updateObject, user_id) => {
    const OrderModel = db.getModel(DB_TABLES.ORDER);
    try {
        console.log(updateObject);

        OrderModel.update(updateObject,{
            where:{
                user_id
            }
        })

    } catch (e) {
        console.log(e);
    }
};



