import deleteClose from "../../assets/icons/delete-closed.png";
import editImage from "../../assets/icons/edit.png";
import notesImage from "../../assets/icons/notes.png";
// import viewNote from "../toDoButtons/viewNote";
import escapeKey from "../closingDialog-modules/escapeKey";


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
    note.addEventListener('click',()=>{
        let content = document.querySelector('.content');
        let dialog = document.createElement('dialog');
        let noteDiv = document.createElement('div');
        noteDiv.classList.add('noteDiv');
        let heading = document.createElement('h1');
        heading.textContent = "Note";
        let note = document.createElement('p');
        note.textContent = toDoObject.note;

        noteDiv.append(heading,note);
        dialog.appendChild(noteDiv);
        content.appendChild(dialog);
        dialog.showModal()
        dialog.addEventListener('keydown',escapeKey)
        });

    
    
    let details = document.createElement('button');
    details.textContent = "Details";
    details.addEventListener('click',()=>{
        console.log(toDoObject);
        let content = document.querySelector('.content');
        let dialog = document.createElement('dialog');
        dialog.classList.add('detailsDialog');

        let heading = document.createElement('h1');
        heading.textContent = 'Details';
            
            
        let titleDiv =  document.createElement('div');
        let titleLabel = document.createElement('p');
        titleLabel.textContent = 'Title';
        let titlePara = document.createElement('p');
        titlePara.textContent = toDoObject.title;
        titleDiv.append(titleLabel,titlePara);


        let descriptionDiv =  document.createElement('div');
        let descriptionLabel = document.createElement('p');
        descriptionLabel.textContent = 'Description';
        let descriptionPara = document.createElement('p');
        descriptionPara.textContent = toDoObject.description;
        descriptionDiv.append(descriptionLabel,descriptionPara);

        let projectDiv =  document.createElement('div');
        let projectLabel = document.createElement('p');
        projectLabel.textContent = 'Project';
        let projectPara = document.createElement('p');
        projectPara.textContent = toDoObject.project;
        projectDiv.append(projectLabel,projectPara);

        let noteDiv =  document.createElement('div');
        let noteLabel = document.createElement('p');
        noteLabel.textContent = 'Note';
        let notePara = document.createElement('p');
        notePara.textContent = toDoObject.note;
        noteDiv.append(noteLabel,notePara);

        let dueDateDiv =  document.createElement('div');
        let dueDateLabel = document.createElement('p');
        dueDateLabel.textContent = 'Due Date';
        let dueDatePara = document.createElement('p');
        dueDatePara.textContent = toDoObject.dueDate;
        dueDateDiv.append(dueDateLabel,dueDatePara);

        let priorityDiv =  document.createElement('div');
        let priorityLabel = document.createElement('p');
        priorityLabel.textContent = 'Priority';
        let priorityPara = document.createElement('p');
        priorityPara.textContent = toDoObject.priority;
        priorityDiv.append(priorityLabel,priorityPara);

        dialog.append(heading,titleDiv,descriptionDiv,projectDiv,noteDiv,dueDateDiv,priorityDiv);
        content.appendChild(dialog);
        dialog.showModal();
        dialog.addEventListener('keydown',escapeKey)


    })
    
    
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