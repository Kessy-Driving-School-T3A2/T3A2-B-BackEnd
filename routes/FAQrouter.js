const express = require('express');
const router = express.Router();
const faq = require("../models/FAQ")

// FAQ will have all CRUD actions


const makeFaq = function (req, res) {
    function createFAQ(req){
        return new faq(req.body);
      }

      createFAQ(req).save((err, faq) => {
      if (err) {
        res.status(500);
        return res.json({
          error: err.message
        });
      }
      console.log(faq)
      res.status(201);
      res.send(faq);
    });
  };


  const getFaqs = function (req, res) {
    const getAllFaqs = function (req) {
        console.log('hi')
        return faq.find()
      };

    getAllFaqs(req).
        exec((err, faqs) => {
          if (err) {
              res.status(500);
              return res.json({
                  error: err.message
              });
          }
          //console.log(faqs)
          res.send(faqs);
      });
  };
 
router.get('/FAQ', getFaqs);

//when passport is integrated
// router.get('/admin/faqs, authorize, getFaqs)
//router.post('/admin/faqs', makeFaq);

module.exports = {
  router,
  makeFaq,
  getFaqs 
}