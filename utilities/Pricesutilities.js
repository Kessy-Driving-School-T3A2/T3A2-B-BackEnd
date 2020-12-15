const prices = require("../models/Prices")

const getAllPrices = function (req) {
    return prices.find()
  };

const updatePrices = function(req) {
    return prices.update(req)
};

module.exports = {
    getAllPrices,
    updatePrices
}
