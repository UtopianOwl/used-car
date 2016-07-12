var app = angular.module("usedCarsApp", []);

app.config(["$stateProvider", function ($stateProvider) {
    $stateProvider
        .state("/home", {
            url: "/home",
            templateUrl: "app/home/home.tpl.html",
            controller: "homeCtrl"
        });
}]);