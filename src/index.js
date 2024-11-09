
import "./styles.css";
import {renderProjects, projectClicked, newTaskSubmitted, addProjectButton, homeBtn,  newProjectTab } from "./UI";
import {  initializeProjectLibrary, initializeTodoLibrary} from "./project";
import { storeProjectLibrary } from "./storage";

//Initialize page
function initialize(){
initializeProjectLibrary();
initializeTodoLibrary();
    renderProjects();
    storeProjectLibrary();
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
