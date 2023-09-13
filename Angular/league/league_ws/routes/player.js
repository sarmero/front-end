var express = require('express');
var router = express.Router();

const playerxController = require('../controllers').playerController;

router.get('/list', playerxController.listFull);
router.get('/sql', playerxController.getSQL);
router.get('/:id', playerxController.getById);
router.post('/', playerxController.add);
router.put('/:id', playerxController.update);
router.delete('/:id', playerxController.delete);


module.exports = router;