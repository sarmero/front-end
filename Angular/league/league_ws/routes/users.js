var express = require('express');
var router = express.Router();

const usersxController = require('../controllers').usersController;


router.get('/list', usersxController.listFull);
router.get('/sql', usersxController.getSQL);
router.get('/:usr', usersxController.obtainUser);
router.get('/:id', usersxController.getById);
router.post('/', usersxController.add);
router.post('/login', usersxController.login);
router.put('/:id', usersxController.update);
router.delete('/:id', usersxController.delete);


module.exports = router;