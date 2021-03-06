const prices = require("../models/Prices")

const getAllPrices = function (req) {
    return prices.find()
  };

  // like FAQ updateOne function was necessary over find by id and update
const updatePrices = function(req) {
    return prices.updateOne(
        {_id: req.body._id},
        {
            lesson: req.body.lesson,
            price: req.body.price
        },
        )
};

module.exports = {
    getAllPrices,
    updatePrices
}
