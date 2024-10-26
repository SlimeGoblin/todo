

import { projectFormValues , projectClicked, initialProject} from "./UI";
import { storeProjectLibrary, storeTodoLibrary} from "./storage";


const projectLibrary = [];

const todoLibrary=[];

        // project constructor-Fine
    function Project(name){
        this.name = name;
    }

        //todo constructor-Fine
function ToDo(title, description, priority,project){
    this.title=title;
    this.description = description;
    this.priority = priority;

    this.project = project;
}



        var project1 = new Project('Test Project')
        projectLibrary.push(project1)


 
            var todo1 = new ToDo('go for a run', "4 mile run", "medium", "Test Project")
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
        document.getElementById('todoDescription').value,
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
      return (newTodo)
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

export{addProjectToLibrary, addTodoToLibrary, assignTasks, getProjectLibrary, getTodoLibrary}