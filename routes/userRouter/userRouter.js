const router = require('express').Router();

const {userController} = require('../../controller');
const {authMiddleware} = require('../../middleware');


router.post('/', userController.createUser);

router.get('/all', userController.getAllUser); //TODO

router.delete('/delete',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    userController.deleteUser
);
router.put('/update',
    authMiddleware.checkAccessToken,
    authMiddleware.getUserFromToken,
    userController.updateUser);

module.exports = router;
