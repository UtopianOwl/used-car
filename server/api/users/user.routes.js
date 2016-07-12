var express = require("express");
var userRouter = express.Router();
var User = require("./user.model");
var jwt = require("jsonwebtoken");
var config = require("../../config");
var bcrypt = require("bcrypt");

userRouter.post("/login", function(req, res) {
    User.findOne({username: req.body.username}, function(err, user) {
        if (err) res.status(500).send(err);
        if (!user) {
            res.status(401).send({success: false, message: "User with the provided username was not found"});
        } else {
            bcrypt.compare(req.body.password, user.password, function(err, match) {
                console.log(req.body.password);
                console.log(user.password);
                if (err) {
                    res.status(500).send(err);
                } else if (!match) {
                    res.status(401).send({success: false, message: "Incorrect password"});
                } else {
                    var token = jwt.sign(user.toObject(), config.secret);
                    res.send({success: true, token: token, user: user.withoutPassword(), message: "Here's your token!"});
                }
            });
        }
    });
});

userRouter.post("/signup", function (req, res) {
    User.findOne({username: req.body.username}, function(err, existingUser) {
        if (err) res.status(500).send(err);
        if (existingUser) res.status(418).send({success: false, message: "That username is already taken. And I'm a teapot."});
        else {
            var newUser = new User(req.body);
            newUser.save(function(err, user) {
                if (err) res.status(500).send(err);
                else res.send({success: true, user: user, message: "Successfully created new user"});
            });
        }
    });
});

userRouter.get("/userlist", function(req, res) {
    User.find({}, function(err, userList) {
        if (err) res.status(500).send(err);
        else res.send(userList);
    })
})

module.exports = userRouter;