var express = require('express');
var router = express.Router();

const leaguexController = require('../controllers').leagueController;

router.get('/list', leaguexController.listFull);
router.get('/sql', leaguexController.getSQL);
router.get('/:usr', leaguexController.leegueUser);
router.get('/:id', leaguexController.getById);
router.post('/', leaguexController.add);
router.put('/:id', leaguexController.update);
router.delete('/:id', leaguexController.delete);


module.exports = router;