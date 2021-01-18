const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require("dotenv").config();


test('sendMail to exist', () => {
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
    expect(sendMail).toBeDefined()

})

test('sendMail is successful when the params are filled in', () => {
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
    expect(sendMail('anth', 'keesydrvingschooltest@gmail.com', 'test', 'test')).toHaveReturnedWith(data)
    }
})

test('sendMail params will affect the mailoptions', () => {
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
    sendMail('anth', 'keesydrvingschooltest@gmail.com', 'test', 'test')
    expect(sendMail.mailOptions).toBe({
        sender: 'anth',
        from: 'keesydrivingschooltest@gmail.com',
        to: 'anthonywilde117@gmail.com',
        subject: 'test',
        text: 'test'
    })}
    }
)

test('sendMail params will be the correct params in the mailoptions', () => {
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
    sendMail('anth', 'keesydrvingschooltest@gmail.com', 'test', 'test')
    expect(sendMail.mailOptions).not.toBe({
        sender: 'notanth',
        from: 'fakemail@gmail.com',
        to: 'anthonywilde117@gmail.com',
        subject: 'a pirates email with bad stuff',
        text: 'yarrrrrrrrrrrrrrrrrrrrr'
    })}
    }
)