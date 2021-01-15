const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// this was required for Authorisation
const db = {};

db.mongoose = mongoose;

db.user = require("./User.js");


module.exports = db;