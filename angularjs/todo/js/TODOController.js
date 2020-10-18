(function(){

    angular.module('AngularJSTodo')
    .controller('TODOController', function($scope){
        $scope.appTitle = "AngularJS Todo App";

        $scope.todos = [];
        $scope.todoText = "";
        $scope.actualTodoText = "";
        $scope.saveTodo = function(){
            let id = $scope.todos.length;

            let newTodo = {
                id,
                text: $scope.todoText,
                done: false
            }

            $scope.todos.push(newTodo);

            $scope.todoText = "";
        }
        $scope.evalKey = function(ev){
            if (ev.key == "Enter"){
                $scope.saveTodo();
            }
        }
        $scope.updateTodo = function(){}
    })

})();