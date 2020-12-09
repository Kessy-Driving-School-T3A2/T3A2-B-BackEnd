const express = require('express');
const router = express.Router();

//all will need connection to front end for views :)


router.get('/', function(req,res,next) {
     res.status(201)
     res.send()
})
router.get('/aboutus', function(req,res,next) {
    res.status(201)
    res.send()
})
router.get('/contactus', function(req,res,next) {
    res.status(201)
    res.send()
})
router.get('/reviews', function(req,res,next) {
    res.status(201)
    res.send()
})

module.exports = router;