var app = angular.module("usedCarApp");

app.config(["$stateProvider", function ($stateProvider) {
    $stateProvider.state("/login", {
        url: "/login",
        templateUrl: "app/login/login.tpl.html",
        controller: "loginCtrl"
    });
}]);