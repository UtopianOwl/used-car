var app = angular.module("usedCarsApp", []);

app.config(["$stateProvider", function ($stateProvider) {
    $stateProvider
        .state("/directions", {
            url: "/directions",
            templateUrl: "app/directions/directions.tpl.html",
            controller: "directionsCtrl"
        });
}]);