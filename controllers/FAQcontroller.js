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
      res.status(201);
      res.send(faq);
    });
  };


  const getFaqs = function (req, res) {
    const getAllFaqs = function (req) {
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
          res.send(faqs);
      });
  };

  const editFaq = function(req, res) {
    const updateFaq = function(req) {
        return faq.update(req)
    };
    
    updateFaq(req).exec((err, faq) => {
        if (err) {
            res.status(500);
            return res.json({
                error: err.message
            });
        }
        res.send(faq)
    }
    )
}

const removeFaq = function(req, res) {
  const deleteFaq = function(req) {
    return faq.deleteOne(req)
  }

  deleteFaq(req).exec((err, faq) => {
    if (err) {
      res.status(500)
      return res.json({
        error: err.message
      });
    }
    res.send(faq)
  })
}

module.exports = {
    makeFaq,
    getFaqs,
    editFaq,
    removeFaq
  }