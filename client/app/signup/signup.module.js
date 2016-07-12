var app = angular.module("usedCarApp");

app.config(["$stateProvider", function ($stateProvider) {
    $stateProvider.state("/signup", {
        url: "/signup",
        templateUrl: "app/signup/signup.tpl.html",
        controller: "signupCtrl"
    });
}]);