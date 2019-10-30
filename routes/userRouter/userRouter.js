const router = require('express').Router();

const {userController} = require('../../controller');




router.post('/', userController.createUser);
router.post('/delete', userController.deleteUser);
router.post('/update', userController.updateUser);

module.exports = router;
