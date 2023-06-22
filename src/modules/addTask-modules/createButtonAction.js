import toDoObject from "../createButtonAction/toDoObject";
import AllProjects from "../allProjects";
import newToDoDOM from '../createButtonAction/newTodoDOM';
import numberDivs from "../createButtonAction/numberDivs";

let projects = {};
let counter = 0
export default function createButtonAction(event){
    // toDoObject;
    // console.log(AllProjects(projects[counter + ''],toDoObject()));
    projects[counter + ''] = toDoObject();
    console.log(projects);
    newToDoDOM(toDoObject(),projects,counter);
    numberDivs(projects);
    




    counter++;
    let dialog = document.querySelector('dialog');
    dialog.remove();
    
}