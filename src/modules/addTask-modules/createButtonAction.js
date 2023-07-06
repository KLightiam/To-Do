import toDoObject from "../createButtonAction/toDoObject";
import AllProjects from "../allProjects";
import newToDoDOM from '../createButtonAction/newTodoDOM';
import numberDivs from "../createButtonAction/numberDivs";
import sidebarButtonsAction from "../createButtonAction/sidebarButtonsAction";
import projectsShow from "../createButtonAction/projectsShow";

let projects = {};
let counter = 0
let newToDoDOMArr = [];
export default function createButtonAction(event){
    
    
    projects[counter + ''] = toDoObject();
    // console.log(projects);
    newToDoDOM(toDoObject(),projects,counter);
    // newToDoDOMArr.push(newToDoDOM(toDoObject(),projects,counter));

    numberDivs(projects);
    projectsShow(toDoObject());
    sidebarButtonsAction(newToDoDOM,projects,counter);
    




    counter++;
    let dialog = document.querySelector('dialog');
    dialog.remove();
    
}