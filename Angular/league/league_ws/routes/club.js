var express = require('express');
var router = express.Router();

const clubxController = require('../controllers').clubController;

router.get('/list', clubxController.listFull);
router.get('/sql', clubxController.getSQL);
router.get('/:id', clubxController.getById);
router.get('/league/:liga', clubxController.listClubLeague);
router.post('/', clubxController.add);
router.put('/:id', clubxController.update);
router.delete('/:id', clubxController.delete);


module.exports = router;