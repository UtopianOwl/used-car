var express = require("express");
var contactRouter = express.Router();
var Contact = require("./contact.model");

contactRouter.route("/")
    .get(function (req, res) {
        Contact.find({user: req.user._id}, function (err, contacts) {
            if (err) res.status(500).send(err);
            else res.send(contacts);
        });
    });

contactRouter.route("/:contactId")
    .get(function (req, res) {
        Contact.findOne({_id: req.params.contactId, user: req.user._id}, function (err, contact) {
            if (err) res.status(500).send(err);
            else res.send(contact);
        });
    })
    .put(function (req, res) {
        Contact.findOneAndUpdate({_id: req.params.contactId, user: req.user._id}, req.body, {new: true}, function(err, contact) {
            if (err) res.status(500).send(err);
            else res.send(contact);
        });
    })
    .delete(function (req, res) {
        Contact.findOneAndRemove({_id: req.params.contactId, user: req.user._id}, function(err, contact) {
            if (err) res.status(500).send(err);
            else res.send(contact);
        });
    });

module.exports = contactRouter;