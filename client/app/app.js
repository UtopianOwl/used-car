var app = angular.module("usedCarApp", ["ui.router", "ngStorage", "ngResource", "ui.bootstrap"]);

app.config(["$stateProvider", "$urlRouterProvider", "$httpProvider", "$resourceProvider", function ($stateProvider, $urlRouterProvider, $httpProvider, $resourceProvider) {
    //runs AuthInterceptor on all http requests
    $httpProvider.interceptors.push("AuthInterceptor");
    // Undefined routes redirect to home
    $urlRouterProvider.otherwise('/home');
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

//Controller for the navbar
app.controller("mainCtrl", ["$scope", "UserService", function ($scope, UserService) {
    console.log("main controller");
    //gives navbar html access to UserService
    $scope.userService = UserService;
}])

//Intercept HTTP requests and add the User Auth token to the header
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