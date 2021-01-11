const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'ff284629a0089874bf1b192b3126ea69-3d0809fb-0cf3d445',
        domain: 'sandboxce8d3150188c46e2b2bd11d40971a2fb.mailgun.org'
    }
}

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, subject, text, cb) => {
    const mailOptions = {
        sender: name,
        from: email,
        to: 'keesydrivingschooltest@gmail.com',
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
            return data// res.redirect("/contactus")
        }
    });
}

module.exports = sendMail;