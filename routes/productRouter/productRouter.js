const router = require('express').Router();
const {productController} = require('../../controller');
const {authMiddleware} = require('../../middleware');


router.post('/',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    productController.createProduct);

router.post('/delete',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    productController.deleteProduct);

module.exports = router;
