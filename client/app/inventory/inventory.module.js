var app = angular.module("usedCarApp");

app.config(["$stateProvider", function ($stateProvider) {
    $stateProvider
        .state("/inventory", {
            url: "/inventory",
            templateUrl: "app/inventory/inventory.tpl.html",
            controller: "inventoryCtrl"
        });
}]);