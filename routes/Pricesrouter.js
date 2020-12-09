const express = require('express');
const router = express.Router();
const prices = require("../models/Prices")


  const getPrices = function (req, res) {
    const getAllPrices = function (req) {
        console.log('hi')
        return prices.find()
      };

    getAllPrices(req).
        exec((err, prices) => {
          if (err) {
              res.status(500);
              return res.json({
                  error: err.message
              });
          }
          console.log(prices)
          res.send(prices);
      });
  };
 
router.get('/prices', getPrices);
// when passport is added 
//router.get('/admin/prices', authorize)
//router.post('/admin/prices', authorize)

module.exports = router;