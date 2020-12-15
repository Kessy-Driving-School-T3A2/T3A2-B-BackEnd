const { getAllPrices, updatePrices} = require("../utilities/Pricesutilities")

// Prices needs a display all function and an update function only

const getPrices = function (req, res) {
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
    updatePrices(req).exec((err, prices) => {
        if (err) {
            res.status(500);
            return res.json({
                error: err.message
            });
        }
        res.send(prices)
    })
}

module.exports = {
    getPrices,
    editPrices
}