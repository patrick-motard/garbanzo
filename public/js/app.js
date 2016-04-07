'use strict';

angular.module('dashboard', [
    'ngRoute',
    'ngCookies',
    'dashboard.LoginController',
    'dashboard.HomeController'
]).
config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '../views/login.html',
                controller: 'LoginController'
            }).
            when('/account', {
                templateUrl: '../views/account.html',
                controller: 'AccountController'
            }).
            otherwise({
                redirectTo: '/'
            });

            $locationProvider.html5Mode(true);
}]);
