'use strict';

angular.module('app', [
    'ngRoute',
    'ngCookies',
    'app.login.controller',
    'app.home.controller',
    'app.nav.controller',
    'app.login.service'
])
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        //all routes configured
        $routeProvider.
            when('/', {
                templateUrl: '../views/login.html',
                controller: 'login.controller'
            }).
            when('/home', {
                templateUrl: '../views/home.html',
                controller: 'home.controller'
            }).
            otherwise({
                redirectTo: '/'
            });
            //remove # from url bar
            $locationProvider.html5Mode(true);
}]);
