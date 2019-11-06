const {productService} = require('../../service');

module.exports = async (req, res) =>{
    try {
        const product = req.body;
        const {user_id} = req.user;

        product.user_id = user_id;
        await  productService.deleteProductByparams(product);

        res.send('delete product')
    }catch (e) {

    }
};
