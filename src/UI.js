//Home Button- Initializes Home Page- OKAY
function homeBtn(){
    const feedContainer= document.getElementById("feedContainer")
    const header = document.querySelector(".headerContainer");
    const homeButton = document.getElementById("home");
    homeButton.addEventListener('click',function(){

    feedContainer.innerHTML=''
    header.innerHTML=''
    const homeHeader = document.createElement("div")
    homeHeader.classList.add("homeHeader");
    homeHeader.textContent="HOME"
    header.appendChild(homeHeader)

    const feed = document.createElement("div");
    feed.classList.add("feed");
    feedContainer.appendChild(feed)
    });
}


//open Project Form -OKAY
function open(){
        document.getElementById("formContainer").style.display = "block"
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

        header.textContent="PROJECTS"
        header.appendChild(projectHeader)

        return(addProjectButton)
    })
}

import { addProjectToLibrary, addTodoToLibrary, getTodoLibrary, getProjectLibrary, assignTasks } from "./project";

//When Project Form is submitted, adds Tab to Project Container
//I'm wondering if this should instead, go through the project Library and renter buttons through that
//MAKE FUNCTIONS THAT RENDER PROJECT AND tODO ELEMENTS BY LOOPING THROUGH LIBRARIES

function clearProjects(){
    const projects = document.getElementById("projectHolder");
    projects.innerHTML = ''
}

//clears projects and then renders Projects from Project Library -OKAY except projectClicked() at the button

function renderProjects(){
    const projectLib = getProjectLibrary();
    const projects = document.getElementById("projectHolder");
   clearProjects();
    for(let i = 0; i < projectLib.length; i++ ){
        const projectTitle = projectLib[i].name
        const newTab = document.createElement("button")
    newTab.classList.add("newProject")
    newTab.setAttribute("id", "projectTab")
    newTab.textContent = projectTitle;
    projects.appendChild(newTab)
    console.log(getTodoLibrary())
    console.log(getProjectLibrary())
    }
}

//new Projects Tab creator (upon submitting project form, adds project to Library and renders Project to UI)

function newProjectTab(){
    const form = document.getElementById("newProjectForm");
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        if (document.getElementById("name").value !== ''){
            addProjectToLibrary();
            renderProjects();
        }
    close();
    //addEventListener to Tab + restyle page + creats new task button + updates Active Project (TOO MUCH WILL NEED TO FIX)
    projectClicked();
    })
}



var activeProject = ''

//UI for when projects are clicked

const header = document.querySelector(".headerContainer");
const content = document.querySelector(`.feedContainer`)

function clearPage(){
        feedContainer.innerHTML=''
        header.innerHTML=''
}

function makeProjectHeader(){
    const projectHeader = document.createElement("div")
    projectHeader.classList.add("projectHeader");
    projectHeader.textContent="PROJECTS"
    header.innerHTML =''
    header.appendChild(projectHeader)
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


//Rendo TODOS
function renderTodos(){
    const taskArray= assignTasks(getTodoLibrary(), activeProject)
    for(let i = 0; i < taskArray.length; i++){
    if (taskArray.length > 0 ){
        const showTasks = document.createElement('button')
    showTasks.textContent = (`${taskArray[i].title}`)

    content.appendChild(showTasks)
    }
}
}

//When Project is clicked- update Content Area + gives project Active Project + renders Todo'
function projectClicked(){
    const projectBtn = document.querySelectorAll(".newProject")

projectBtn.forEach(function(i){
    i.addEventListener('click', function(){
clearPage();
makeProjectHeader();
createTaskButton();
closeTodoForm();

//update active Project

 activeProject = i.textContent
console.log(`active Project is: ${activeProject}`)

//will eventually have to be able to loop through all the Todo's and create Divs for each one
renderTodos();

    });

});

}


// Havent checked if this is cool yet or not
//WHEN A NEW TASK IS SUBMITTED TO A CREATED PROJECT- WE CAN'T READ TITLE  WHEN WE CLICK ANOTHER PROJECT


function newTaskSubmitted(){
    const todoForm = document.getElementById("newTodoForm");

    todoForm.addEventListener('submit', function(e){
        e.preventDefault();
        addTodoToLibrary(activeProject);

//add task tab-only works on UI end
        const newTask = document.createElement("button")
        newTask.setAttribute("type", "button")
        newTask.textContent= `${document.getElementById('todoName').value}`
        const content = document.querySelector(`.feedContainer`)
        content.appendChild(newTask)
        

        closeTodo();

    })
}

export{homeBtn, addProjectButton, newProjectTab, renderProjects, projectClicked, newTaskSubmitted}