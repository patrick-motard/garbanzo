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

    module.controller("RouteController", function($scope) {
            $scope.login = function (){
                console.log("submitted");
            }
    });
