
import "./styles.css";

import {renderProjects, projectClicked, newTaskSubmitted, addProjectButton, homeBtn,  newProjectTab } from "./UI";
import { assignTasks, getProjectLibrary, getTodoLibrary} from "./project";



function initializeDOM(){
    renderProjects();
   projectClicked();
    newTaskSubmitted();
    addProjectButton();
}
initializeDOM();


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


