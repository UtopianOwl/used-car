var express = require("express");
var inventoryRouter = express.Router();
var Car = require("./car.model");

inventoryRouter.route("/")
    .post(function (req, res) {
        console.log(req.body)
        var newCar = new Car(req.body);
        newCar.save(function (err, car) {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else res.status(201).send(car);
        });
    });

inventoryRouter.route("/:carId")
    .get(function (req, res) {
        Car.findOne({_id: req.params.carId}, function (err, car) {
            if (err) res.status(500).send(err);
            else res.send(car);
        });
    })
    .put(function (req, res) {
        Car.findOneAndUpdate({_id: req.params.carId}, req.body, {new: true}, function(err, car) {
            if (err) res.status(500).send(err);
            else res.send(car);
        });
    })
    .delete(function (req, res) {
        Car.findOneAndRemove({_id: req.params.carId}, function(err, car) {
            if (err) res.status(500).send(err);
            else res.send(car);
        });
    });

module.exports = inventoryRouter;