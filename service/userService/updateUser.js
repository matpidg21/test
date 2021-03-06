const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');


module.exports = (updateObject, user_id) => {
    const UserModel = db.getModel(DB_TABLES.USER);

    try {
        UserModel.update(updateObject, {
            where:{
                id: user_id
            },
            returning:true
        })
    } catch (e) {
        console.log(e);
    }
};



