const mongoose = require('mongoose')


const pricesSchema = new mongoose.Schema({})


module.exports = mongoose.model("price", pricesSchema)