const express = require('express');
const router = express.Router();
const {makeFaq, getFaqs, editFaq, removeFaq} = require("../controllers/FAQcontroller")


 
router.get('/FAQ', getFaqs);
//when passport is integrated
// router.get('/admin/faqs, authorize, getFaqs)
//router.post('/admin/faqs', makeFaq);

module.exports = {
  router
}