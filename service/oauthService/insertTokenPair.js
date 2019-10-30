const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

    module.exports = tokenObject => {
        const OAuthModel =  db.getModel(DB_TABLES.OAUTH_TOKEN);
        try {
            return OAuthModel.create(tokenObject)
        } catch (e) {
            console.log(e);
        }
};
