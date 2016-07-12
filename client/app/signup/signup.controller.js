var app = angular.module("usedCarApp");

app.controller("signupCtrl", ["$scope", "$state", "UserService", function($scope, $state, UserService) {
    console.log("signup controller");
    $scope.signup = function(user) {
        if (user.password !== $scope.passwordRepeat) {
            $scope.passwordMessage = "Passwords do not match.";
        } else {
            UserService.signup(user).then(function(response) {
                $state.go("/login");
            }, function(response) {
                alert("There was a problem: " + response.data.message);
            });
        }
    }
}]);
