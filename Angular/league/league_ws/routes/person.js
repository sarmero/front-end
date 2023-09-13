var express = require('express');
var router = express.Router();

const personxController = require('../controllers').personController;

// router.get('/:usr', personxController.obtainPerson);
router.get('/list', personxController.listFull);
router.get('/sql', personxController.getSQL);
router.get('/:id', personxController.getById);
router.post('/', personxController.add);
router.put('/:id', personxController.update);
router.delete('/:id', personxController.delete);


module.exports = router;