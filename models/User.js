const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require("passport-local-mongoose");


const User = new Schema({
    username: {
        type: String,
        required: "Please provide a username.",
        unique: true
      }
    });

User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", User)