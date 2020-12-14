const express = require('express');
const router = express.Router();
const {login, necessaryforroutes} = require('../controllers/Admincontroller')

router.get('/login', necessaryforroutes)
    .post('/login', login)

module.exports = router
