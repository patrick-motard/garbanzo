'use-strict';

angular.module("dashboard.LoginController")
.controller("LoginController", function($scope, $http) {
    $scope.loggedIn = false;
    var req = {
         method: 'GET',
         url: '/users',
         headers: {
           'x-access-token': response.data.token
         }
    }
    $scope.login = function (){
        var data = {name: $scope.user.name , password: $scope.user.password};
        $http.post("/authenticate",data)
        .then(function(response){
            //req is defined above
            $http(req)
            .then(function(response){
                console.log("logged in");
                $scope.loggedIn = true;
            });
            }
        );
    };
});
