const express = require('express');
const {login} = require('../controladores/controllerAuth');

const router = express.Router();
router.post('/login', login);
module.exports = router;