//Organize code better
import { addProjectToLibrary, getProjectLibrary, assignTasks, removeProjectfromLibrary, toggleCompleteTask,editTodoLibrary} from "./project";
import { getProjectLibraryJSON, storeProjectLibrary, storeTodoLibrary } from "./storage";
import { getTodoLibrary , addTodoToLibrary, removeTodofromLibrary} from "./task";


import trashImage from "./imgs/trash-2.svg"
import editImage from "./imgs/edit.svg"

import { todaysDate } from "./date";

//Home Button- Initializes Home Page- OKAY
function homeBtn(){
    const feedContainer= document.getElementById("feedContainer")
    const header = document.querySelector(".headerContainer");
    const homeButton = document.getElementById("home");
    homeButton.addEventListener('click',function(){

    feedContainer.innerHTML=''
    header.innerHTML=''
    const homeHeader = document.createElement("div")
    homeHeader.classList.add("projctHeader");
    homeHeader.textContent="MY PROJECTS"
    header.appendChild(homeHeader)

    });
}


//open Project Form -OKAY
function open(){
        document.getElementById("formContainer").style.display = "flex"
    }

    //close Project Form-OKAY
    function close(){
        document.getElementById("formContainer").style.display="none"
        document.getElementById("name").value=''
    }
//open todo form-OKAY
    function openTodo(){
        document.getElementById("todoModal").style.display="block";
    }
//close todo form-NOT OKAY---- not emptying values when closed!!!
    function closeTodo(){
        document.getElementById("todoModal").style.display="none"
        document.getElementById("name").value=''
    }

    // close Edit Form
function closeEdit(){
    document.getElementById("editTodoModal").style.display = "none"
}


//Add Project Button (opens Project Form) and changes website displays(should probably be two functions)
function addProjectButton(){
    const addProjectBtn =document.getElementById("addProject");

   addProjectBtn.addEventListener('click', ()=>{
        console.log("okay")
        open();

        const closeButton = document.getElementById("closeBtn");
        closeButton.addEventListener('click', close);

        const header = document.querySelector(".headerContainer");
        const projectHeader = document.createElement("div")
        projectHeader.classList.add("projectHeader");


        return(addProjectButton)
    })
}



//When Project Form is submitted, adds Tab to Project Container

function clearProjects(){
    const projects = document.getElementById("projectHolder");
    projects.innerHTML = ''
}

//clears projects and then renders Projects from Project Library -OKAY except projectClicked() at the button

function renderProjects(){



    var projectLib = getProjectLibrary();



    const projects = document.getElementById("projectHolder");
   clearProjects();
   if(projectLib !== null){
    for(let i = 0; i < projectLib.length; i++ ){

        const projectTitle = projectLib[i].name
        const newTab = document.createElement("button")
    newTab.classList.add("newProject")
    newTab.setAttribute("id", "projectTab")

    console.log(projectTitle)
    projectClicked();
    console.log(activeProject)
        if(projectTitle ==  activeProject){
           newTab.classList.add("activeTab")
    
        }


    projects.appendChild(newTab)

    const newTabTitle = document.createElement('div');
    newTabTitle.textContent = projectTitle
    newTabTitle.classList.add("newTabTitle")
    newTabTitle.addEventListener('click',function(){
        projectClicked();
    })



    

    newTab.appendChild(newTabTitle)



    const newTabDelete = document.createElement('img');
    newTabDelete.src = trashImage
    newTabDelete.textContent = "Delete";
    newTabDelete.classList.add('projectDeleteButton')

    newTabDelete.addEventListener('click', function(){
        projectLib[i].remove = true;
        deletedProject = projectLib[i].name 
        removeProjectfromLibrary();
        removeTodofromLibrary()
        renderProjects();
        renderTodos();
        homeBtn();
    })
    newTab.appendChild(newTabDelete)
    


    }
}
storeProjectLibrary();
}

    console.log(getTodoLibrary())
    console.log(getProjectLibrary())


//can't let users give projects the same name

const retrieveProjectLibrary = getProjectLibrary();

function noDuplicates(){
    console.log(retrieveProjectLibrary)
    var isUnique= true
    var projectjson = getProjectLibraryJSON();
    for(let i = 0; i < projectjson.length; i++){
        console.log(document.getElementById("name").value)
        console.log(projectjson[i].name)
        if(document.getElementById("name").value == projectjson[i].name){
            alert(`you already have a project named ${projectjson[i].name}`)
            return false
        }

}
console.log(isUnique)

return isUnique

}



//new Projects Tab creator (upon submitting project form, adds project to Library and renders Project to UI)

function newProjectTab(){
    const form = document.getElementById("newProjectForm");
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        if (document.getElementById("name").value !== ''  && (noDuplicates()== true)){
            console.log(noDuplicates())
            addProjectToLibrary();
            renderProjects();
        }
    close();
    //addEventListener to Tab + restyle page + creats new task button + updates Active Project (TOO MUCH WILL NEED TO FIX)
    projectClicked();
    })
}



var activeProject = ''
var deletedProject = ''

//UI for when projects are clicked

const header = document.querySelector(".headerContainer");
const content = document.querySelector(`.feedContainer`)

function clearPage(){
        feedContainer.innerHTML=''
        header.innerHTML=''
}

function makeProjectHeader(subheader){
    const projectHeader = document.createElement("div")
    projectHeader.classList.add("projectHeader");
    projectHeader.textContent="PROJECTS"

    const projectSubheader = document.createElement("div");
    projectSubheader.classList.add('projectSubheader')
    projectSubheader.textContent = subheader
    header.innerHTML =''
    header.appendChild(projectSubheader)
}

function createTaskButton(){
    const content = document.querySelector(`.feedContainer`)
    content.innerHTML=''
    const taskButton = document.createElement("button")
    taskButton.setAttribute("type", "button")
    taskButton.classList.add("taskButton");
    taskButton.textContent="+ New Task"
    content.appendChild(taskButton)
    taskButton.addEventListener("click", function(){
        console.log('noshit')
        openTodo();
    })
}

function closeTodoForm(){
    const todoClose = document.getElementById("todoCloseBtn");
    todoClose.addEventListener('click', function(){
        closeTodo();
    })
}


//go through and make these individual functions
//Render TODOS
function renderTodos(){
    content.innerHTML=''
    createTaskButton();
    storeTodoLibrary();
    const taskArray= assignTasks(getTodoLibrary(), activeProject)

    for(let i = 0; i < taskArray.length; i++){
    if (taskArray.length > 0 ){
        



        //PUT TASK DOM LOGIC HERe- CheckBox, Edit, Delete
        const todoHolder = document.createElement("div")
        todoHolder.classList.add("todoHolder")

        const todoTitle = document.createElement("div")
        todoTitle.classList.add("todoTitle")
        todoTitle.textContent = taskArray[i].title;

        const todoDueDate = document.createElement("div");
        const fry = todaysDate(taskArray[i].due)
        todoDueDate.textContent = fry    

        //Checkbox or completed

        const checkBoxContainer = document.createElement("label");
        checkBoxContainer.classList.add("checkBoxContainer")

        const todoCheck = document.createElement("input");
        todoCheck.setAttribute("type", "checkbox")
        todoCheck.classList.add("checkbox")
        checkBoxContainer.appendChild(todoCheck)

        const checkmark = document.createElement("span");
        checkmark.classList.add("checkmark");
        checkBoxContainer.appendChild(checkmark)

        const todoCheckBox = document.createElement("div")
        todoCheckBox.textContent = "Completed";

        todoCheck.addEventListener('click', function(){
            todoListener();
            var isComplete = taskArray[i].complete;
            taskArray[i].complete = toggleCompleteTask(isComplete)
            console.log(taskArray[i].complete)
            if(taskArray[i].complete == true){
                todoTitle.classList.add("completed")
            }
            else{
                todoTitle.classList.remove("completed")
            }
            storeTodoLibrary();
        })
        checkBoxContainer.appendChild(todoCheckBox)

//Edit Event Listener
        const todoEditBox = document.createElement("img")
        todoEditBox.src = editImage
        todoEditBox.classList.add("editButton")

        const editClose = document.getElementById("editCloseBtn")
        editClose.addEventListener('click', function(){
            closeEdit()
        })

        todoEditBox.addEventListener('click',function(){



            editTodo(taskArray[i], taskArray[i].title, taskArray[i].due, taskArray[i].complete);
            editTodoLibrary(taskArray[i], taskArray[i].title, taskArray[i].due, taskArray[i].complete);
            storeTodoLibrary();
            
            
        })

//Delete Event Listener
        const todoDelete = document.createElement("img")
        todoDelete.setAttribute('id', 'deleteButton')
        todoDelete.src=trashImage
   
        todoDelete.addEventListener('click', function(){
            taskArray[i].remove = true
            removeTodofromLibrary();
            renderTodos();
        })

        todoHolder.appendChild(todoTitle)
        todoHolder.appendChild(todoDueDate)

        todoHolder.appendChild(checkBoxContainer)
        todoHolder.appendChild(todoEditBox)
        todoHolder.appendChild(todoDelete)
        content.appendChild(todoHolder);

        //initialize completed

        if (taskArray[i].complete == true){
            todoTitle.classList.add("completed")
         }
 
    }



    

    }

}




//When Project is clicked- update Content Area + gives project Active Project + renders Todo'
function projectClicked(){
    const projectBtn = document.querySelectorAll(".newTabTitle")

projectBtn.forEach(function(i){
    i.addEventListener('click', function(){
clearPage();
makeProjectHeader(i.textContent);
createTaskButton();
closeTodoForm();




//update active Project
 activeProject = i.textContent
console.log(`active Project is: ${activeProject}`)



//highlight active Project



//clear todos and render all Todos
renderTodos();
renderProjects();

    });

});

const projectDeleteBtn = document.querySelectorAll(".projectDeleteButton")

projectDeleteBtn.forEach(function(i){
    i.addEventListener('click',function(){
        removeProjectfromLibrary()
        renderProjects();
        renderTodos();
        console.log(`todo lib:`)
        console.log(getTodoLibrary())
        console.log('projectLib')
        console.log(getProjectLibrary())
    })
})

}

function newTaskSubmitted(){
    const todoForm = document.getElementById("newTodoForm");

    todoForm.addEventListener('submit', function(e){
        e.preventDefault();
        addTodoToLibrary(activeProject);


//add task tab-only works on UI end
     renderTodos();
        closeTodo();
        console.log(`todoLib`)
        console.log(getTodoLibrary())
        console.log('projectLib')
        console.log(getProjectLibrary())

    })
}



function todoListener(){
    console.log('click')

}

function editTodo(todo, name, date, complete){
   const showEdit =  document.getElementById("editTodoModal")

    showEdit.style.display="block";

    const editForm = document.getElementById("editTodoForm")
    var editName = document.getElementById("editTodoName")
    editName.value = name

    var editDueDate = document.getElementById("editTodoDueDate");
    editDueDate.value = date

    

 

    editForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        editTodoLibrary(todo, name, date)
        renderTodos();
        closeEdit();
        console.log("test")
        console.log(getTodoLibrary())
    })
}





export{homeBtn, addProjectButton, newProjectTab, renderProjects, projectClicked, newTaskSubmitted}