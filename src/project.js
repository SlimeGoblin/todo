

import { getProjectLibraryJSON} from "./storage";
import { removeProjectTodos } from "./task";


var projectLibrary = [];

//initilize Project Library
function initializeProjectLibrary(){

    if(getProjectLibraryJSON() != null ){
    projectLibrary = getProjectLibraryJSON();
    console.log('newlib')
    console.log(projectLibrary)
    }
}

        // project constructor-Fine
    function Project(name, remove){
        this.name = name;
        this.remove = false
    }

//initial project
        var project1 = new Project('Test Project')
        projectLibrary.push(project1)

//Construct and push Projects to LIbrary
const constructProject =()=>(new Project(document.getElementById('name').value))
const projectToLibrary = (project)=>{
    (projectLibrary.push(project))
}
//add project to library
function addProjectToLibrary(){
    const newProject = constructProject();
      projectToLibrary(newProject)
      const projectName = projectLibrary[0].name
      console.log(projectLibrary)

      return (projectName)
  }
  //edit todoLibrary
function editTodoLibrary(todo, name, date, complete){
    console.log(todo.due)
    console.log(name)
    todo.title = document.getElementById('editTodoName').value
    todo.due = document.getElementById('editTodoDueDate').value
}

//Access our Libraries in other modules
const getProjectLibrary =() => projectLibrary

//need a function that sorts through todoLibrary and creates a new  Library of only todos matching a projects name
function assignTasks(todoLibrary, activeProject){
    let newArray = todoLibrary.filter(function(el){
        return el.project == activeProject
    })
    console.log('the todos in this active project are:')
    console.log(newArray)
    return(newArray)
}

//Delete Project with its Todos
var deletedProject = ''
function removeProjectfromLibrary(){
    for( let i = 0; i <projectLibrary.length; i++){
       
        if(projectLibrary[i].remove == true){
        deletedProject = projectLibrary[i].name
        projectLibrary.splice([i], 1)

        console.log(projectLibrary)
        console.log(deletedProject)

        }

    }

removeProjectTodos()
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


export{addProjectToLibrary, assignTasks, getProjectLibrary,  removeProjectfromLibrary, toggleCompleteTask, editTodoLibrary, projectLibrary, initializeProjectLibrary, deletedProject}