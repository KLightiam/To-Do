import addImage from "../assets/icons/add.png";
import addTask from "./addTask";

let addTaskButton = document.querySelector('#add-task-main > button');
addTaskButton.addEventListener('click',addTask);
let addTaskDiv = document.querySelector('#add-task');
let addTaskImage = new Image();
addTaskImage.src = addImage;
addTaskDiv.appendChild(addTaskImage);
addTaskImage.addEventListener('click',addTask);

