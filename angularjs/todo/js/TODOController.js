(function(){

    angular.module('AngularJSTodo')
    .controller('TODOController', function($scope){
        $scope.appTitle = "AngularJS Todo App";

        $scope.todos = [];
        $scope.todoText = "";
        $scope.actualTodoText = "";
        $scope.actualTodoId = 0;
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
        $scope.evalKey = function(ev, foo = "save"){
            if (ev.key == "Enter"){
                if (foo == "save"){
                    $scope.saveTodo();
                }else if (foo == "edit"){
                    $scope.updateTodo();
                }
            }
        }
        $scope.updateTodo = function(){
            $scope.todos.forEach(function(td){
                if (td.id == $scope.actualTodoId){
                    td.text = $scope.actualTodoText;
                }
            });
            $scope.closeEditor();
        }
        $scope.deleteTodo = function(t) {
            $scope.todos = $scope.todos.filter(x => x.id != t);
            $scope.todos.forEach((td, i) => td.id = i);
        }
        $scope.openTodoEditor = function(id) {
            document.querySelector("#todo-editor-container").style.display = "block";
            $scope.actualTodoId = id;
            $scope.todos.forEach(td => {
                if (td.id == id){
                    $scope.actualTodoText = td.text;
                }
            });
        }
        $scope.closeEditor = function(){
            document.querySelector("#todo-editor-container").style.display = "none";
        }
    })

})();