var app = angular.module("usedCarsApp", []);

app.config(["$stateProvider", function ($stateProvider) {
    $stateProvider
        .state("/contact", {
            url: "/contact",
            templateUrl: "app/contact/contact.tpl.html",
            controller: "contactCtrl"
        });
}]);