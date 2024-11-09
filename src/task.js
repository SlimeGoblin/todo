import { getTodoLibraryJSON, storeTodoLibrary } from "./storage";
import { deletedProject } from "./project";

var todoLibrary=[];

const getTodoLibrary =() => todoLibrary

function initializeTodoLibrary(){
    if(getTodoLibraryJSON() != null){
        todoLibrary = getTodoLibraryJSON();
        console.log('newtodo')
        console.log(todoLibrary)
    }
}

        //todo constructor-Fine
        function ToDo(title, due, complete,project, remove){
            this.title=title;
            this.due = due;
            this.complete = false;
            this.project = project;
            this.remove = false
        }

          //construct and push ToDos to Library
function constructTodo(activeProject){
    const newTodo = new ToDo(
        document.getElementById('todoName').value,
        document.getElementById('todoDueDate').value,
        document.getElementById('todoPriority').value,
        activeProject
        )
        return newTodo
}
//push todo library
const todoToLibrary =(newTodo) =>{
    (todoLibrary.push(newTodo)) 
}

function addTodoToLibrary(activeProject){
    const newTodo = constructTodo(activeProject);
      todoToLibrary(newTodo)
      console.log(todoLibrary)
      storeTodoLibrary();
      return (newTodo)
}


        var todo1 = new ToDo('go for a run', "2025-11-02", "medium", "Test Project")
        todoLibrary.push(todo1);

        function removeTodofromLibrary(){
            for( let i = 0; i <todoLibrary.length; i++){
        
                if(todoLibrary[i].remove == true)
                todoLibrary.splice([i], 1)
        
            }
        }

function removeProjectTodos(){
    for (let i = 0; i<todoLibrary.length; i++){
        if(todoLibrary[i].project == deletedProject){
            todoLibrary[i].remove = true
        }
    }
    removeTodofromLibrary();

}

export{initializeTodoLibrary, getTodoLibrary, addTodoToLibrary, removeProjectTodos, removeTodofromLibrary}