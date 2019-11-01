const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = async findObject =>{
    const ProductModel = db.getModel(DB_TABLES.PRODUCT);

    const product = await ProductModel.findOne({
        where: {
           user_id: findObject.user_id
        },
        attributes: ['id', 'user_id']
    });

    return product && product.dataValues;
};
