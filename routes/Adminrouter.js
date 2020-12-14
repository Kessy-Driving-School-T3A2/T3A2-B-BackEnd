const express = require('express');
const router = express.Router();
const {login, soothethecryingchild} = require('../controllers/Admincontroller')

router.get('/login', soothethecryingchild)
    .post('/login', login)

module.exports = router
