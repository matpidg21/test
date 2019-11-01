const router = require('express').Router();

const {authController} = require('../../controller');


router.post('/', authController.authUser);
router.post('/logout', authController.logoutUser);
module.exports = router;
