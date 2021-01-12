const express = require('express');
const router = express.Router();
const {makeReview, getReviews, removeReview} = require("../controllers/Reviewcontroller")
const authJwt = require("../utilities/authJWT")

// for user 
router.get('/', getReviews);
router.post('/', makeReview);
router.delete('/',  authJwt.verifyToken, removeReview)

module.exports = router