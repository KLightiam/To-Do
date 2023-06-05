import createTitle from "./addTask-modules/createTitle";
import createDescription from "./addTask-modules/createDescription";
import createProject from "./addTask-modules/createProject";
import createNote from "./addTask-modules/createNote";
import createDueDate from "./addTask-modules/createDueDate";
import createPriority from "./addTask-modules/createPriority";
import createButtons from "./addTask-modules/createButtons";
import escapeKey from "./closingDialog-modules/escapeKey";


export default function addTask(){
    let content = document.querySelector('.content');
    let dialog = document.createElement('dialog');
    
    let formDiv = document.createElement('div');
    createTitle(formDiv);
    createDescription(formDiv);
    createProject(formDiv);
    createNote(formDiv);
    createDueDate(formDiv);
    createPriority(formDiv);
    createButtons(formDiv);

    dialog.appendChild(formDiv);
    content.appendChild(dialog);
    dialog.showModal();
    dialog.addEventListener('keydown',escapeKey);
}