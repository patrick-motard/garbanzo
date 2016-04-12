var app = angular.module('app', [
    'ui.router',
    'ngCookies',
])
.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
        'use-strict';
        $stateProvider.
            state('/', {
                url: '/',
                templateUrl: 'js/login/login.html',
                controller: 'LoginController'
            }).
            state('/home', {
                url:'/home',
                templateUrl: 'js/home/home.html',
                controller: 'HomeController'
            });
        $urlRouterProvider.otherwise('/');
}]);
