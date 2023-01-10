const express = require('express');
const Router = express.Router;

const router = new Router();
const registerUserServices = require('../Services/RegisterFormService');

router.post('/save',registerUserServices.saveRegisterUser);
router.get('/get',registerUserServices.getRegisterUsers);
router.put('/update/:id',registerUserServices.updateRegisterUser);
router.delete('/delete/:id',registerUserServices.deleteRegisterUser);

module.exports = router;