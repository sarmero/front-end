var express = require('express');
var router = express.Router();

const positionxController = require('../controllers').positionController;

router.get('/list', positionxController.listFull);
router.get('/sql', positionxController.getSQL);
router.get('/:id', positionxController.getById);
router.post('/', positionxController.add);
router.put('/:id', positionxController.update);
router.delete('/:id', positionxController.delete);


module.exports = router;