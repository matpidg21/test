const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = async userObject => {
    const UserModel = db.getModel(DB_TABLES.USER);
    console.log(UserModel);
    try {
        const user = await UserModel.create(userObject);
        console.log(user);

        return user && user.dataValues;

    } catch (e) {
        console.log(e);
        throw new Error('Error')
    }
};
