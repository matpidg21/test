const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');
const ControllerError = require('../../error/ControllerError');

module.exports = async userObject => {
    const UserModel = db.getModel(DB_TABLES.USER);
    try {
        return await UserModel.create(userObject);

    } catch (e) {
        console.log(e);
        throw new ControllerError(e.parent.sqlMessage, 500, 'userService/createUser')
    }
};
