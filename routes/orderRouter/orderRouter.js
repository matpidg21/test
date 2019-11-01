const router = require('express').Router();
const {orderController} = require('../../controller');
const {authMiddleware,productMiddleware} = require('../../middleware');

router.post(
    '/',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    productMiddleware.getProductFromUser,
    orderController.createOrder);

module.exports = router;
