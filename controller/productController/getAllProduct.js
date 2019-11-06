const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = async (req, res) =>{
    try {
        const {user_id} = req.user;

        const ProductModel = db.getModel(DB_TABLES.PRODUCT);
        const product = await ProductModel.findAll({
            where: {
                user_id
            },
            attributes: ['id', 'user_id', 'name', 'description', 'price', 'wight']
        });
        res.json(product);

    }catch (e) {
        console.log(e);
    }
};
