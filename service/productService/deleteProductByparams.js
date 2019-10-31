const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = (deleteObject) => {
    const UserModel = db.getModel(DB_TABLES.PRODUCT);

    UserModel.destroy({
        where: deleteObject
    })
};
