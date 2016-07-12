var express = require("express");
var carRouter = express.Router();
var Car = require("./car.model");

carRouter.route("/").get(function (req, res) {
    Car.find({}, function (err, cars) {
        if (err) res.status(500).send(err);
        else res.send(cars);
    });
});


module.exports = carRouter;