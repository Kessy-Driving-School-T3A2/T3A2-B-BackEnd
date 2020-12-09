const express = require('express');
const router = express.Router();
const prices = require("../models/Prices")

// Prices needs a display all function and an update function thats it

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

//   const updatePrices = function(req, res) {
//       const upPrice = req.body
//       prices.update(upPrice){
//           if (err) {
//               res.status(500);
//               return res.json({
//                   error: err.message
//               });
//           }
//           console.log(prices)
//           res.send(prices);
//       }
//   }

 
router.get('/prices', getPrices);
// when passport is added 
//router.get('/admin/prices', authorize, getPrices)
//router.post('/admin/prices', authorize)

module.exports = {
    router,
    getPrices,
    //updatePrices
}