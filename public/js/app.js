var app = angular.module('app', [
    'ui.router',
    'ngCookies',
])
.run(function ($rootScope, $state, login) {
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
    if (toState.authenticate && !login.state){
      // User isn’t authenticated
      $state.transitionTo("login");
      event.preventDefault();
    }
  });
})
.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
        'use-strict';
        $stateProvider.
            state('login', {
                url: '/',
                templateUrl: 'js/login/login.html',
                controller: 'LoginController',
                authenticate: false
            }).
            state('home', {
                url:'/home',
                templateUrl: 'js/home/home.html',
                controller: 'HomeController',
                authenticate: true
            });
        $urlRouterProvider.otherwise('/');
}]);
