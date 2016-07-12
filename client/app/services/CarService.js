var app = angular.module("usedCarApp");

app.service("CarService", ["$http", function ($http) {
    var self = this;
    this.carList = [];


    this.getCarList = function () {
        return $http.get("/api/cars").then(function (respose) {
            self.carList = respose.data;
            return respose.data;
        });
    };

    this.addCar = function (car) {
        return $http.post("/auth/inventory", car).then(function (response) {
            return response.data
        });
    }

    this.getCar = function (id) {
        return $http.get("/auth/inventory/" + id).then(function (response) {
            return response.data;
        });
    };

    this.editCar = function (car) {
        return $http.put("/auth/inventory/" + car._id, car).then(function (response) {
            return response.data;
        });
    };

    this.deleteCar = function (car) {
        return $http.delete("/auth/inventory/" + car._id).then(function (response) {
            return response.data;
        });
    };

}]);