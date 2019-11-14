const router = require('express').Router();
const {productController} = require('../../controller');
const {authMiddleware} = require('../../middleware');


router.post('/',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    productController.createProduct);

router.delete('/delete',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    productController.deleteProduct);

router.get('/all',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    productController.getAllProduct);

module.exports = router;
