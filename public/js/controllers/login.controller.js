angular.module("app.login.controller",['app.login.service'])
.controller("LoginController", function($scope, $http, login) {
    'use-strict';
    //auth with backend to confirm user name and password
    $scope.login = function (){
        var data = {name: $scope.user.name , password: $scope.user.password};
        //POST user's name and password to the /authenticate route in express
        $http.post("/authenticate",data)
        .then(function(response){
            var req = {
                 method: 'GET',
                 url: '/users',
                 headers: {
                   'x-access-token': response.data.token
                 }
            }
            $http(req)
            .then(function(response){
                //we will be changing the GET response data from /users for now if the GET succeeds we login
                console.log(response);
                login.setState(true);
            });
            }
        );
    };

});
