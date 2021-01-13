const faq = require("../models/FAQ")

const createFAQ = function(req) {
    return new faq(req.body);
};

const getAllFaqs = function(req) {
    return faq.find()
};

const updateFaq =  function(req, res) {
   return  faq.updateOne(
        {_id: req.body._id},
        {
            question: req.body.question,
            answer: req.body.answer
        })
}

const deleteFaq = function(id) {
    return faq.findByIdAndDelete(id)
};

module.exports = {
    createFAQ,
    getAllFaqs,
    updateFaq,
    deleteFaq
}