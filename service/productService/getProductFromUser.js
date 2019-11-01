const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = async findObject =>{
    const ProductModel = db.getModel(DB_TABLES.PRODUCT);
    console.log(ProductModel);
    console.log(findObject);
    const product = await ProductModel.findOne({
        where: {
           user_id: findObject.user_id
        },
        attributes: ['id', 'user_id']
    });
    console.log(product + '--------');
    return product && product.dataValues;
};
