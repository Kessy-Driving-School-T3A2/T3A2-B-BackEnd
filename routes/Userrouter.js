const express = require('express');
const router = express.Router();
//all will need connection to front end for views :)
// will send the pages from front end



router.get('/', function(req,res) {
   
    res.status(200)
    res.json()
})
router.get('/aboutus', function(req,res) {
    //pictures
    res.status(200)
    res.json()
})
router.get('/contactus', function(req,res) {
    res.status(200)
    res.json()
})
router.get('/reviews', function(req,res) {
    res.status(200)
    res.json()
})

module.exports = router