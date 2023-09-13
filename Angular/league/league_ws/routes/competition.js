var express = require('express');
var router = express.Router();

const competitionxController = require('../controllers').competitionController;

router.get('/list', competitionxController.listFull);
router.get('/sql', competitionxController.getSQL);
router.get('/:id', competitionxController.getById);
router.post('/', competitionxController.add);
router.put('/:id', competitionxController.update);
router.delete('/:id', competitionxController.delete);


module.exports = router;