angular.module("app.login.service",[])
.factory('login',[function(){
    'use-strict';
    var factory = {};
    //init factory state
    factory.state = false;
    //method to change state
    factory.setState = function(bool){
        factory.state = bool;
    }
    return factory;
}]);
