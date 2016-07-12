var app = angular.module("usedCarApp");

app.controller("contactCtrl", ["$scope", "ContactService", function($scope, ContactService) {
    console.log("contact controller");
    $scope.addContact = function () {
        console.log("adding contact");
        ContactService.addContact();
    }
}]);