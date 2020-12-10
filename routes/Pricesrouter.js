const express = require('express');
const router = express.Router();
const prices = require("../models/Prices")

// Prices needs a display all function and an update function thats it

  const getPrices = function (req, res) {
    const getAllPrices = function (req) {
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
          res.send(prices);
      });
  };

  const editPrices = function(req, res) {
    const updatePrices = function(req) {
        return prices.update(req)
    };
    
    updatePrices(req).exec((err, prices) => {
        if (err) {
            res.status(500);
            return res.json({
                error: err.message
            });
        }
        res.send(prices)
    }
    )
}

 
router.get('/prices', getPrices);
// when passport is added 
//router.get('/admin/prices', authorize, getPrices)
//router.post('/admin/prices', authorize)

module.exports = {
    router,
    getPrices,
    editPrices
}