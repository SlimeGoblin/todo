
import "./styles.css";
import {renderProjects, projectClicked, newTaskSubmitted, addProjectButton, homeBtn,  newProjectTab } from "./UI";
import {  initializeProjectLibrary} from "./project";
import { initializeTodoLibrary } from "./task"
import { storeProjectLibrary, storeTodoLibrary } from "./storage";

//Initialize page
function initialize(){
initializeProjectLibrary();
initializeTodoLibrary();
    renderProjects();
    storeProjectLibrary();
    storeTodoLibrary();
   projectClicked();
    newTaskSubmitted();
    addProjectButton();
}
initialize();

//add Event Listeners to initalized page
function navController(){
    const homeButton = document.getElementById('home')
    homeButton.addEventListener('click', function(){
        homeBtn();
    })

    const addProject = document.getElementById('addProject')
    addProject.addEventListener('click', function(){
        newProjectTab();
    })
}
navController();