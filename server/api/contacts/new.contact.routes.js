var express = require("express");
var newContactRouter = express.Router();
var Contact = require("./contact.model");
var nodemailer = require('nodemailer');

newContactRouter.route("/").post(function (req, res) {

    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'kylekatarusedcar@gmail.com', // Your email id
            pass: 'kkucadmin' // Your password
        }
    });

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"Used Car" <kylekatarusedcar@gmail.com>', // sender address
        to: 'narzimedia@gmail.com', // list of receivers
        subject: 'New Contact for KKUC', // Subject line
        text: req.body, // plaintext body
//        html: '<b>Hello world 🐴</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });

    var newContact = new Contact(req.body);

    newContact.save(function (err, contact) {
        if (err) res.status(500).send(err);
        else res.status(201).send(contact);
    });
});

module.exports = newContactRouter;