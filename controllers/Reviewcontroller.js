const {createReview, getAllReviews, deleteReview} = require("../utilities/Reviewutilities")


// FAQ will has all CRUD actions


const makeReview = function (req, res) {
      createReview(req).save((err, review) => {
      if (err) {
        res.status(500);
        return res.json({
          error: err.message
        });
      }
      res.status(201);
      res.json(review);
    });
};


const getReviews = function (req, res) {
    getAllReviews(req).
        exec((err, reviews) => {
          if (err) {
              res.status(500);
              return res.json({
                  error: err.message
              });
          }
          res.json(reviews);
      });
  };



const removeReview = function(req, res) {
  deleteReview(req).exec((err, review) => {
    if (err) {
      res.status(500)
      return res.json({
        error: err.message
      });
    }
    res.json(review)
  })
}

module.exports = {
    makeReview,
    getReviews,
    removeReview
  }