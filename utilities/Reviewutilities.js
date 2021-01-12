const review = require("../models/Review.js")

const createReview = function(req) {
    return new review(req.body);
};

const getAllReviews = function(req) {
    return review.find()
};

const deleteReview = function(req) {
    return review.deleteOne(req)
};

module.exports = {
    createReview,
    getAllReviews,
    deleteReview
}