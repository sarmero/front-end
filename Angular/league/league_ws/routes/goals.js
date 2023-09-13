var express = require('express');
var router = express.Router();

const goalsxController = require('../controllers').goalsController;

router.get('/list', goalsxController.listFull);
router.get('/sql', goalsxController.getSQL);
router.get('/:id', goalsxController.getById);
router.post('/', goalsxController.add);
router.put('/:id', goalsxController.update);
router.delete('/:id', goalsxController.delete);


module.exports = router;