var module = angular.module("dashboard", ['ngRoute']);

    module.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: '../views/login.html',
                    controller: 'RouteController as rc'
                }).
                when('/account', {
                    templateUrl: '../views/account.html',
                    controller: 'RouteController as rc'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);

    module.controller("RouteController", function($scope, $http) {

            $scope.login = function (){
                //console.log($scope.user.name+"  "+$scope.user.password);
                var data = {name: $scope.user.name , password: $scope.user.password};
                $http.post("/authenticate",data)
                    .then(
                        function(response){
                            console.log(response.headers());
                            $http.get("/users", response.headers(['x-access-token']))
                                .then(function(response){
                                    console.log("logged in");
                                });
                        }
                    );
            }
    });
