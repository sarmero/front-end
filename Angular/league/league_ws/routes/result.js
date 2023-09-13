var express = require('express');
var router = express.Router();

const resultxController = require('../controllers').resultController;

router.get('/list', resultxController.listFull);
router.get('/sql', resultxController.getSQL);
router.get('/:id', resultxController.getById);
router.post('/', resultxController.add);
router.put('/:id', resultxController.update);
router.delete('/:id', resultxController.delete);


module.exports = router;