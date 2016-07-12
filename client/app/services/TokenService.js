var app = angular.module("usedCarsApp", []);

app.service("TokenService", ["$localStorage", function($localStorage) {
    
    this.getToken = function() {
        return $localStorage.token;
    };
    
    this.setToken = function(token) {
        $localStorage.token = token;
    };
    
    this.removeToken = function() {
        delete $localStorage.token;
    };
}]);