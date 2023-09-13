var express = require('express');
var router = express.Router();

const calendarxController = require('../controllers').calendarController;

router.get('/list', calendarxController.listFull);
router.get('/sql', calendarxController.getSQL);
router.get('/:id', calendarxController.getById);
router.post('/', calendarxController.add);
router.put('/:id', calendarxController.update);
router.delete('/:id', calendarxController.delete);


module.exports = router;