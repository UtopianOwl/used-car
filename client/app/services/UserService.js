var app = angular.module("usedCarApp");

app.service("UserService", ["$http", "$state", "TokenService", "$localStorage", function ($http, $state, TokenService, $localStorage) {
    var self = this;
    this.currentUser = getOrSetUser() || {};

    function getOrSetUser(user) {
        if (user === undefined) {
            return $localStorage.user;
        } else {
            $localStorage.user = user;
            return user;
        }
    }

    function removeUser() {
        delete $localStorage.user;
    }
    
    this.signup = function(user) {
        console.log("signing up")
        return $http.post("/user/signup", user);
    };

    this.login = function (user) {
        console.log("logging in: " + user.username);
        return $http.post("/user/login", user).then(function (response) {
            TokenService.setToken(response.data.token);
            self.currentUser = getOrSetUser(response.data.user);
            return response;
        });
    };

    this.logout = function () {
        removeUser();
        TokenService.removeToken();
        $state.go("/home");
        console.log("logged out");
    };
    
    this.isAuthenticated = function() {
        return TokenService.getToken();
    };

}]);