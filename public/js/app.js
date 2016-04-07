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
