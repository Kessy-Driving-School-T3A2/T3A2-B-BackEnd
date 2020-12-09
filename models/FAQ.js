const mongoose = require('mongoose')


const faqsSchema = new mongoose.Schema({
    question: String,
    answer: String
});

module.exports = mongoose.model("faq", faqsSchema)
