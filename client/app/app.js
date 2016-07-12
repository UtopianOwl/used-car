var app = angular.module("usedCarApp", ["ui.router", "ngStorage", "ngResource", "ui.bootstrap"]);

app.config(["$stateProvider", "$urlRouterProvider", "$httpProvider", "$resourceProvider", function ($stateProvider, $urlRouterProvider, $httpProvider, $resourceProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");
//    $urlRouterProvider.otherwise('/home');
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

app.controller("mainCtrl", ["$scope", "UserService", function ($scope, UserService) {
    console.log("main controller");
    $scope.userService = UserService;
}])

app.factory("AuthInterceptor", ["$location", "$q", "TokenService", function ($location, $q, TokenService) {
    return {
        request: function (config) {
            var token = TokenService.getToken();
            if (token) {
                config.headers = config.headers || {};
                config.headers.Authorization = "Bearer " + token;
            }
            return config;
        },
        responseError: function (response) {
            if (response.status === 401) {
                TokenService.removeToken();
                $location.path("/login");
            }
            return $q.reject(response);
        }
    }
}]);