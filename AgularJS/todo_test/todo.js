
        var app = angular.module('todoApp', ['ngStorage']);
       
        app.controller('todoList', function ($scope, $localStorage) {
            $scope.todos = [];
            
            $scope.LIST;
            $scope.loadList = function(array){
                array.forEach(element => {
                    $scope.todos.push({'title':element.title,'done':false});
                });
            }

            //get the item from local storage
            let data = localStorage.getItem('todo_store');
            if(data){
                $scope.LIST = JSON.parse(data);
                $scope.loadList($scope.LIST);
            }
            else{
                LIST = [];
            }

             // add new todo   
            $scope.addTodo = function () {
                if($scope.newtodo != null){
                    $scope.todos.push({'title':$scope.newtodo,'done':false});
                    $scope.newtodo = ' ';
                    //add item to localstorage when updating the to do list
                    var str = JSON.stringify($scope.todos);
                    localStorage.setItem("todo_store", str);
                }
            };
    
            // remove the completed item
            $scope.removeToDo = function() {
                $scope.todos = $scope.todos.filter(function(item){
                    return !item.done;
                })
                //add item to localstorage when updating the to do list
                var str = JSON.stringify($scope.todos);
                localStorage.setItem("todo_store", str);
            }
        });
    
   