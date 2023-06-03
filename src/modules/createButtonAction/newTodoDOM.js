import deleteClose from "../../assets/icons/delete-closed.png";
import editImage from "../../assets/icons/edit.png";
import notesImage from "../../assets/icons/notes.png";

export default function newToDoDOM(toDoObject){
    let tasks = document.querySelector('.tasks');
    let task = document.createElement('div');
    task.classList.add('task');
    let taskLeftSide = document.createElement('div');
    taskLeftSide.classList.add('task-left-side');
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type','checkbox');
    let para = document.createElement('p');
    para.textContent = toDoObject.title;
    para.classList.add('task-text');
    
    taskLeftSide.append(checkBox,para);

    let taskRightSide = document.createElement('div');
    taskRightSide.classList.add('task-right-side');
    let note = new Image();
    note.src = notesImage;
    let details = document.createElement('button');
    details.textContent = "Details";
    let date = document.createElement('p');
    date.textContent = toDoObject.dueDate;
    let edit = new Image();
    edit.src = editImage;
    let del = new Image();
    del.src = deleteClose;

    taskRightSide.append(note,details,date,edit,del);

    task.append(taskLeftSide,taskRightSide);
    tasks.appendChild(task);


}