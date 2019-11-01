const router = require('express').Router();

const {userController} = require('../../controller');
const {authMiddleware} = require('../../middleware');


router.post('/', userController.createUser);
router.post('/delete',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    userController.deleteUser
);
router.post('/update',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    userController.updateUser);

module.exports = router;
