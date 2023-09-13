var express = require('express');
var router = express.Router();

const editionxController = require('../controllers').editionController;

router.get('/list', editionxController.listFull);
router.get('/sql', editionxController.getSQL);
router.get('/:id', editionxController.getById);
router.post('/', editionxController.add);
router.put('/:id', editionxController.update);
router.delete('/:id', editionxController.delete);


module.exports = router;