const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');


module.exports = (updateObject, id) => {
    const UserModel = db.getModel(DB_TABLES.USER);

    try {
        return UserModel.update(
            {
                name: updateObject
            },
            {
                where: id
            })

    } catch (e) {
        console.log(e);
    }
};



