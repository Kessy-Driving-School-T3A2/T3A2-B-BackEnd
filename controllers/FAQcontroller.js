const {createFAQ, getAllFaqs, updateFaq, deleteFaq} = require("../utilities/FAQutilities")
const faq = require("../models/FAQ")

// FAQ will have all CRUD actions

const makeFaq = function (req, res) {
      createFAQ(req).save((err, faq) => {
      if (err) {
        res.status(500);
        return res.json({
          error: err.message
        });
      }
      res.status(201);
      res.json(faq);
    });
};


const getFaqs = function (req, res) {
    getAllFaqs(req).
        exec((err, faqs) => {
          if (err) {
              res.status(500);
              return res.json({
                  error: err.message
              });
          }
          res.json(faqs);
      });
  };

const editFaq = async(req, res, done) => {
     updateFaq(req, res).exec((err, faqs) => {
      if (err) {
          res.status(500);
          return res.json({
              error: err.message
          });
      }
      res.json(faqs);
  });
}

const removeFaq = function(req, res) {
  deleteFaq(req.body._id).exec((err, faq) => {
    if (err) {
      res.status(500)
      return res.json({
        error: err.message
      });
    }
    res.json(faq)
  })
}

module.exports = {
    makeFaq,
    getFaqs,
    editFaq,
    removeFaq
  }