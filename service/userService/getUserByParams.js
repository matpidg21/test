const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');


module.exports = async (searchObject) => {

    const UserModel = db.getModel(DB_TABLES.USER);

    const user = await UserModel.findOne({
        where: {
            email:searchObject
        }
    });
    return user && user.dataValues;



};
