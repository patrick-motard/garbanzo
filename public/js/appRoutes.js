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
            // cannot set property name of undefined when uncommented
            // trying to set default values
            // $scope.user.name = "jim lahey";
            // $scope.user.password = "iAmTheLiqour";
            $scope.login = function (){
                console.log($scope.user.name+"  "+$scope.user.password);
                var data = {name: $scope.user.name , password: $scope.user.password};
                var auth = $http.post("http://localhost:3000/authenticate",data)
                    .then(
                        function(){
                            console.log("worked");
                        }
                    );
                console.log("auth"+auth);
            }
    });
