
//create a module
var myApp = angular.module("myModule", ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/first-msg',{
        template:'<b>This is the first message</b>'
    })

});