const express = require('express');
const router = express.Router();
const {getPrices, editPrices} = require("../controllers/Pricescontroller")
const authJwt = require("../utilities/authJWT")


 //for regular user
router.get('', getPrices);
// for admin only 
router.get('/admin',  authJwt.verifyToken, getPrices)
router.put('/admin',  authJwt.verifyToken, editPrices)

module.exports = router
