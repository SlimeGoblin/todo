import { getProjectLibrary, getTodoLibrary} from "./project"



//store and get todo library
const storeTodoLibrary = () =>{
    const todoStringify = JSON.stringify(getTodoLibrary())
    localStorage.setItem("todoJSON", todoStringify )

}

const getTodoLibraryJSON = () =>{
    const getTodoJSON = localStorage.getItem("todoJSON")
    const todoJSON = JSON.parse(getTodoJSON)
    console.log(todoJSON)
    
    return todoJSON
}

//story and get project library
const storeProjectLibrary = ()=>{
    const projectStringify= JSON.stringify(getProjectLibrary())
    localStorage.setItem("projectJSON",projectStringify)
}

const getProjectLibraryJSON= ()=>{
   const getProjectJSON =  localStorage.getItem("projectJSON")
   const projectJSON = JSON.parse(getProjectJSON)

   return projectJSON
}


export {storeTodoLibrary, storeProjectLibrary, getTodoLibraryJSON, getProjectLibraryJSON}


