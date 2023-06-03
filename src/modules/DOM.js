import addImage from "../assets/icons/add.png";
import addTask from "./addTask";

let addTaskDiv = document.querySelector('#add-task');
let addTaskImage = new Image();
addTaskImage.src = addImage;
addTaskDiv.appendChild(addTaskImage);
addTaskImage.addEventListener('click',addTask);

