const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = async (req, res) =>{
    try {
        const ProductModel = db.getModel(DB_TABLES.USER);
        const users = await ProductModel.findAll({});
        res.json(users);

    }catch (e) {
        console.log(e);
    }
};
