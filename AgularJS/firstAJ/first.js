// /1. Create a module
var myApp = angular.module("myModule",[]);

//2.View Logic === controller
var myController = function($scope){
    $scope.message = "AngularJS Webinar"
    $scope.name = "John"
}


//anohter controller
var myController1 = function($scope){
    $scope.message = "AngularJS Webinar contoller 2"
    $scope.name = "John controller 2"
}

//3. attach the controller with the module
myApp.controller("myController",myController)
myApp.controller("myController1",myController1)