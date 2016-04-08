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
                templateUrl: 'js/login/login.html',
                controller: 'LoginController'
            }).
            when('/home', {
                templateUrl: 'js/home/home.html',
                controller: 'HomeController'
            }).
            otherwise({
                redirectTo: '/'
            });
            //remove # from url bar
            $locationProvider.html5Mode(true);
}]);
