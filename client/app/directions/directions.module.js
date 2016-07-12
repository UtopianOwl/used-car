var app = angular.module("usedCarApp");

app.config(["$stateProvider", function ($stateProvider) {
    $stateProvider
        .state("/directions", {
            url: "/directions",
            templateUrl: "app/directions/directions.tpl.html",
            controller: "directionsCtrl"
        });
}]);