var app = angular.module("usedCarsApp", []);

app.config(["$stateProvider", function ($stateProvider) {
    $stateProvider
        .state("/inventoryEdit", {
            url: "/inventory_edit",
            templateUrl: "app/inventory/edit/inventory.edit.tpl.html",
            controller: "inventoryEditCtrl",
        });
}]);