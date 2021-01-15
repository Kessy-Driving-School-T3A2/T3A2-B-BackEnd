const express = require('express');
const router = express.Router();
const {makeFaq, getFaqs, editFaq, removeFaq} = require("../controllers/FAQcontroller")
const authJwt = require("../utilities/authJWT")

// for user/customer 
router.get('/', getFaqs);
//for Admin only
router.get('/admin', authJwt.verifyToken, getFaqs)
router.post('/admin',  authJwt.verifyToken,  makeFaq);
router.put('/admin',  authJwt.verifyToken, editFaq)
router.delete('/admin',  authJwt.verifyToken, removeFaq)

module.exports = router
