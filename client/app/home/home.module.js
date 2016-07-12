var app = angular.module("usedCarApp");

app.config(["$stateProvider", function ($stateProvider) {
    $stateProvider
        .state("/home", {
            url: "/home",
            templateUrl: "app/home/home.tpl.html",
            controller: "homeCtrl"
        });
}]);