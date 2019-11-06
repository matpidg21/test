const router = require('express').Router();
const {orderController} = require('../../controller');
const {authMiddleware} = require('../../middleware');

router.post(
    '/',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    orderController.createOrder);

router.delete('/delete',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    orderController.deleteOrder
);


router.put(
    '/accepted',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    orderController.updateOrder.acceptedOder);

router.put(
    '/rejected',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    orderController.updateOrder.rejectedOrder);
module.exports = router;
