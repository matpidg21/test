const router = require('express').Router();

const {fileController} = require('../../controller');


router.post('/', fileController.addFile);
router.delete('/delete', fileController.deleteFile);


module.exports = router;
