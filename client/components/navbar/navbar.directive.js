var app = angular.module("usedCarsApp", []);

app.directive("navbar", [function() {
    return {
        templateUrl: "/client/components/navbar/navbar.tpl.html",
        controller: "navbarCtrl"
    }
}]);