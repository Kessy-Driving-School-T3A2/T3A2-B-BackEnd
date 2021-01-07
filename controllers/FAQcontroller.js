const {createFAQ, getAllFaqs, updateFaq, deleteFaq} = require("../utilities/FAQutilities")


// FAQ will has all CRUD actions


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

const editFaq = function(req, res) {
    updateFaq(req).exec((err, faq) => {
        if (err) {
            res.status(500);
            return res.json({
                error: err.message
            });
        }
        res.json(faq)
    })
}

const removeFaq = function(req, res) {
  deleteFaq(req).exec((err, faq) => {
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