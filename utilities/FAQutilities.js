const faq = require("../models/FAQ")

const createFAQ = function(req) {
    return new faq(req.body);
};

const getAllFaqs = function(req) {
    return faq.find()
};

const updateFaq = function(req) {
    return faq.update(req)
};

const deleteFaq = function(req) {
    return faq.deleteOne(req)
};

module.exports = {
    createFAQ,
    getAllFaqs,
    updateFaq,
    deleteFaq
}