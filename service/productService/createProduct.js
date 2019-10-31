const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');


module.exports = productObject => {
    const ProductModel = db.getModel(DB_TABLES.PRODUCT);

    ProductModel.create(productObject);
};
