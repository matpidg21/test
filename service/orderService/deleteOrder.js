const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = (deleteObject) =>{
    const UserModel = db.getModel(DB_TABLES.ORDER);

    UserModel.destroy({
        where: deleteObject
    })
};
