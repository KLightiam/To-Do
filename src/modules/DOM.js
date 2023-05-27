import addImage from "../assets/icons/add.png";
import deleteClose from "../assets/icons/delete-closed.png";
import deleteOpen from "../assets/icons/delete-open.png";
import downArrow from "../assets/icons/down-arrow.png";
import editImage from "../assets/icons/edit.png";
import notesImage from "../assets/icons/notes.png";
import rightArrow from "../assets/icons/right-arrow.png";
import toDoImage from "../assets/icons/to-do.png";
import upArrow from "../assets/icons/up-arrow.png";
import addTask from "./addTask";

let addTaskDiv = document.querySelector('#add-task');

let addTaskImage = new Image();
addTaskImage.src = addImage;

addTaskDiv.appendChild(addTaskImage);

addTaskImage.addEventListener('click',addTask);