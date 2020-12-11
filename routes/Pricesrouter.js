const express = require('express');
const router = express.Router();
const {getPrices, editPrices} = require("../controllers/Pricescontroller")



 
router.get('/prices', getPrices);
// when passport is added 
//router.get('/admin/prices', authorize, getPrices)
//router.post('/admin/prices', authorize)

module.exports = {
    router
}