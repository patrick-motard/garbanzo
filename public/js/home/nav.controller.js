app.controller('NavController', function($scope, $location, login){
    'use-strict';
    //set intial state for navbar
    $scope.loggedIn = login.state;
    //watch the factory.state variable for changes
    $scope.$watch(function(){ return login.state},function(newVal, oldVal){
        $scope.loggedIn = login.state;
        if($scope.loggedIn === true){
            $location.path('/home');
        }
    });
    //logout function to change navbar state
    $scope.logout = function (){
        login.setState(false);
    };
});
