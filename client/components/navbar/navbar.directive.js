var app = angular.module("usedCarApp");

app.directive("navbar", [function() {
    return {
        templateUrl: "/client/components/navbar/navbar.tpl.html",
        controller: "navbarCtrl"
    }
}]);