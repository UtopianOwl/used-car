var app = angular.module("usedCarApp");

app.config(["$stateProvider", function ($stateProvider) {
    $stateProvider
        .state("/contactView", {
            url: "/contact_view",
            templateUrl: "app/contact/view/contact.view.tpl.html",
            controller: "contactViewCtrl"
        });
}]);