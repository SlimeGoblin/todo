

import { storeTodoLibrary, getProjectLibraryJSON, getTodoLibraryJSON} from "./storage";


var projectLibrary = [];


var todoLibrary=[];

function initializeProjectLibrary(){
    if(getProjectLibraryJSON() != null ){
    projectLibrary = getProjectLibraryJSON();
    console.log('newlib')
    console.log(projectLibrary)
    }
}

function initializeTodoLibrary(){
    if(getTodoLibraryJSON() != null){
        todoLibrary = getTodoLibraryJSON();
        console.log('newtodo')
        console.log(todoLibrary)
    }
}




        // project constructor-Fine
    function Project(name, remove){
        this.name = name;
        this.remove = false
    }

        //todo constructor-Fine
function ToDo(title, due, complete,project, remove){
    this.title=title;
    this.due = due;
    this.complete = false;
    this.project = project;
    this.remove = false
}



        var project1 = new Project('Test Project')
        projectLibrary.push(project1)


 
            var todo1 = new ToDo('go for a run', "2025-11-02", "medium", "Test Project")
            todoLibrary.push(todo1);





//On submitting forms we can create projects and todo's in the same way

//Construct and push Projects to LIbrary
const constructProject =()=>(new Project(document.getElementById('name').value))
const projectToLibrary = (project)=>{
    (projectLibrary.push(project))

}
function addProjectToLibrary(){
    const newProject = constructProject();
      projectToLibrary(newProject)
      const projectName = projectLibrary[0].name
      console.log(projectLibrary)

      return (projectName)
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

function editTodoLibrary(todo, name, date, complete){
    console.log(todo.due)
    console.log(name)
    todo.title = document.getElementById('editTodoName').value
    todo.due = document.getElementById('editTodoDueDate').value


}


//Access our Libraries in other modules
const getProjectLibrary =() => projectLibrary
const getTodoLibrary =() => todoLibrary

//This is copied from elsewehre so please don't delte!
//need a function that sorts through todoLibrary and creates a new  Library of only todos matching a projects name

function assignTasks(todoLibrary, activeProject){
    let newArray = todoLibrary.filter(function(el){
        return el.project == activeProject
    })
    console.log('the todos in this active project are:')
    console.log(newArray)
    return(newArray)
}

function removeTodofromLibrary(){
    for( let i = 0; i <todoLibrary.length; i++){

        if(todoLibrary[i].remove == true)
        todoLibrary.splice([i], 1)

    }
}


//Delete Project with its Todos
//Consider just putting render Projects into this because they alwasy have to go together


function removeProjectfromLibrary(){
var deletedProject = ''

    for( let i = 0; i <projectLibrary.length; i++){
       
        if(projectLibrary[i].remove == true){
        deletedProject = projectLibrary[i].name
        projectLibrary.splice([i], 1)




        console.log(projectLibrary)
        console.log(todoLibrary)
        console.log(deletedProject)

        }

    }

    for (let i = 0; i<todoLibrary.length; i++){
        if(todoLibrary[i].project == deletedProject){
            todoLibrary[i].remove = true
        }
    }



}

// Complete Project Toggle

function toggleCompleteTask(tog){
   if (tog== false){
    tog = true
   }
   else{
    return false
   }
return tog
}




export{addProjectToLibrary, addTodoToLibrary, assignTasks, getProjectLibrary, getTodoLibrary, removeTodofromLibrary, removeProjectfromLibrary, toggleCompleteTask, editTodoLibrary, projectLibrary, initializeProjectLibrary, initializeTodoLibrary}