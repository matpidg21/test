const {productService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const product = req.body;
        const {user_id} = req.user;

        product.user_id = user_id;
        await productService.createProduct(product);

        res.status(201).end('ok')
    } catch (e) {
        console.log(e);
    }
};
