const mongoose = require('mongoose')


const PricesSchema = new mongoose.Schema({
    lesson: String,
    price: String
});

module.exports = mongoose.model("price", PricesSchema)