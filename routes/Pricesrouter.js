const express = require('express');
const router = express.Router();
const {getPrices, editPrices} = require("../controllers/Pricescontroller")
const {authorize} = require('../controllers/Admincontroller')


 //for regular user
router.get('', getPrices);
// for admin only 
router.get('/admin', authorize, getPrices)
router.put('/admin', authorize, editPrices)

module.exports = router
