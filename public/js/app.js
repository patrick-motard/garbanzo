var app = angular.module('app', [
    'ngRoute',
    'ngCookies',
])
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        'use-strict';
        //all routes configured
        $routeProvider.
            when('/', {
                templateUrl: '../views/login.html',
                controller: 'LoginController'
            }).
            when('/home', {
                templateUrl: '../views/home.html',
                controller: 'HomeController'
            }).
            otherwise({
                redirectTo: '/'
            });
            //remove # from url bar
            $locationProvider.html5Mode(true);
}]);
