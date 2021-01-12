const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require("dotenv").config();

// so my account got flagged because it picked up the api key on git hub... shit, need strategies for this please
const auth = {
    auth: {
        api_key: process.env.MAILGUNAPIKEY,
        domain: process.env.MAILGUNDOMAIN
        }
    }


const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, subject, text, cb) => {
    const mailOptions = {
        sender: name,
        from: email,
        to: 'anthonywilde117@gmail.com',
        subject: subject,
        text: text
    }
// call back hell impending
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
            console.log("message received")
            //return data// res.redirect("/contactus")
        }
    });
}

module.exports = sendMail;