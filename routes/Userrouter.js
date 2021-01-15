const express = require('express');
const router = express.Router();

router.get('/', function(req,res) {
    res.status(200)
    res.json()
})
router.get('/aboutus', function(req,res) {
    res.status(200)
    res.json()
})
router.get('/contactus', function(req,res) {
    res.status(200)
    res.json()
})


module.exports = router