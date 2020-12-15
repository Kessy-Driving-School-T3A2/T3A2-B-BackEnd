const express = require('express');
const router = express.Router();

//all will need connection to front end for views :)
// will send the pages from front end

router.get('/', function(req,res) {
  
    res.status(201)
    res.send()
})
router.get('/aboutus', function(req,res) {
    res.status(201)
    res.send()
})
router.get('/contactus', function(req,res) {
    res.status(201)
    res.send()
})
router.get('/reviews', function(req,res) {
    res.status(201)
    res.send()
})

module.exports = router