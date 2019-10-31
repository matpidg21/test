const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = async findObject =>{
    const OauthModel = db.getModel(DB_TABLES.OAUTH_TOKEN);
    console.log(OauthModel);

    const user = await OauthModel.findOne({
        where: {
            access_token:findObject
        },
        attributes: ['user_id']
    });
    console.log(user);
    return user && user.dataValues;
};
