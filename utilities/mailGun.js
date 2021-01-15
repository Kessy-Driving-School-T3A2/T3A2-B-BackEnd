const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require("dotenv").config();

// keys are hidden because mailgun bans account if keys are public
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

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
            
            
        }
    });
}

module.exports = sendMail;