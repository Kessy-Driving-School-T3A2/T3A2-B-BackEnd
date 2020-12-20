const express = require('express');
const router = express.Router();
const aws = require(aws-sdk)
//all will need connection to front end for views :)
// will send the pages from front end

// Set the region 
AWS.config.update({region: 'ap-southeast-2'});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Create the parameters for calling listObjects
const bucketParams = {
  Bucket : 'keesydrivingschool',
};

// Call S3 to obtain a list of the objects in the bucket
const pictures = s3.listObjects(bucketParams, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
router.get('/', function(req,res) {
    
    res.status(201)
    res.send(pictures)
})
router.get('/aboutus', function(req,res) {
    res.status(201)
    res.send(pictures)
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