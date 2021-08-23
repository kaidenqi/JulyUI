
//create a module
var myApp = angular.module("myModule", ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
    .when('/first-msg',{
        template:'<b>This is the first message</b>'
    })
    .when('/second-msg',{
        templateUrl:'second.html',
        controller:'second-msg'
    })
    .when('/third-msg',{
        template:'<b>This is the third message</b>'
    })
});

myApp.controller('second-msg',function($scope){
    $scope.a = 10;
    $scope.b = 20;
})