var module = angular.module("dashboard", ['ngRoute', 'ngCookies']);

    module.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: '../views/login.html',
                    controller: 'LoginController'
                }).
                when('/account', {
                    templateUrl: '../views/account.html',
                    controller: 'LoginController'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);

    module.controller("LoginController", function($scope, $http) {
        var req = {
             method: 'GET',
             url: '/users',
             headers: {
               'x-access-token': response.data.token
             }
        }
        $scope.login = function (){
            //console.log($scope.user.name+"  "+$scope.user.password);
            var data = {name: $scope.user.name , password: $scope.user.password};
            $http.post("/authenticate",data)
            .then(function(response){
                //console.log(response.data.token);
                $http(req)
                .then(function(response){
                    console.log("logged in");
                });
                }
            );
        };
    });
