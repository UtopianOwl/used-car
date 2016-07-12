var app = angular.module("usedCarApp");

app.controller("inventoryEditCtrl", ["$scope", "CarService", function($scope, CarService) {
    console.log("inventory.edit controller");
    $scope.inventory = [];
    var editIndex = -1;
    var setInventory = function () {
        CarService.getCarList().then(function(list) {
            $scope.inventory = list;
            console.log($scope.inventory);
            console.log(list);
        });
    };
    setInventory();
    
    $scope.addCar = function (car) {
        console.log("adding car");
        CarService.addCar(car);
        setInventory();
    }
    
    $scope.remove = function (index) {
        var car = $scope.inventory[index];
        console.log ("removing car: " + car.name);
        CarService.deleteCar(car);
        setInventory();
    }
    
    $scope.isEditing = function (index) {
        return index === editIndex;
    }
    
    $scope.edit = function (index) {
        editIndex = index;
    }
    
    $scope.update = function (car) {
        CarService.editCar(car);
        setInventory();
        editIndex = -1;
    }
}]);