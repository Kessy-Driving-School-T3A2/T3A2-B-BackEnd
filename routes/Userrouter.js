const express = require('express');
const router = express.Router();
//all will need connection to front end for views :)
// will send the pages from front end
const sendMail = require('../utilities/mailGun')


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
// router.post('/contactus', sendMail)


module.exports = router