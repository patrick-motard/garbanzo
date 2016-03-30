var module = angular.module("dashboard", ['ngRoute']);

    module.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/main', {
                    templateUrl: '../views/main.html',
                    controller: 'RouteController'
                }).
                when('/account', {
                    templateUrl: '../views/account.html',
                    controller: 'RouteController'
                }).
                when('/login', {
                    templateUrl: '../views/login.html',
                    controller: 'RouteController'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);

    module.controller("RouteController", function($scope) {
            $scope.loggedIn = false;
    });
