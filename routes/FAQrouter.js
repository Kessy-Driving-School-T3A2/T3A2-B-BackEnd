const express = require('express');
const router = express.Router();
const {makeFaq, getFaqs, editFaq, removeFaq} = require("../controllers/FAQcontroller")
const {authorize} = require('../controllers/Admincontroller')

// for user 
router.get('/', getFaqs);
//for Admin only
router.get('/admin', authorize, getFaqs)
router.post('/admin', authorize,  makeFaq);
router.put('/admin', authorize, editFaq)
router.delete('/admin', authorize, removeFaq)

module.exports = router
