import { getProjectLibrary, getTodoLibrary } from "./project"


const storeTodoLibrary = () =>{
    const todoStringify = JSON.stringify(getTodoLibrary())
    localStorage.setItem(todoJSON, todoStringify )
}

const storeProjectLibrary = ()=>{
    const projectStorage= jSON.stringify(getProjectLibrary())
}

const getTodoLibraryJSON = () =>{
    localStorage.getItem(getTodoLibrary())
}

const getProjectLibraryJSON= ()=>{
    localStorage.getItem(getProjectLibrary())
}


export {storeTodoLibrary, storeProjectLibrary, getTodoLibraryJSON, getProjectLibraryJSON}


