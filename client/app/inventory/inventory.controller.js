var app = angular.module("usedCarsApp", []);

app.controller("inventoryCtrl", ["$scope", "CarService", function($scope, CarService, carResource) {
    console.log("inventory controller");
    $scope.inventory = [];
    var setInvventory = function () {
        CarService.getCarList().then(function(list) {
            $scope.inventory = list;
            console.log($scope.inventory);
            console.log(list);
        });
    };
    setInvventory();
    
    
    $scope.activeSlide = 0;
    $scope.isActive = function (index) {
        console.log(index);
        return index === $scope.activeSlide;
    }
    $scope.nextSlide = function() {
        $scope.activeSlide++;
        console.log($scope.activeSlide);
    }
    $scope.prevSlide = function() {
        $scope.activeSlide--;
        console.log($scope.activeSlide);
    }
    $scope.setSlide = function() {
        
    }
    
}]);