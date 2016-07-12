var app = angular.module("usedCarApp");

app.controller("loginCtrl", ["$scope", "$state", "UserService", function($scope, $state, UserService) {
    console.log("login controller");
    $scope.login = function(user) {
        UserService.login(user).then(function(response) {
            $state.go("/inventoryEdit");
        }, function(response) {
            alert("There was a problem: " + response.data.message);
        });
    }
}]);

