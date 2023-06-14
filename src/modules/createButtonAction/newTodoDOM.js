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
    edit.addEventListener('click',()=>{
        let content = document.querySelector('.content');
        let dialog = document.createElement('dialog');

        let formDiv = document.createElement('div');


        let title = document.createElement('div');
        let titleLabel = document.createElement('label');
        titleLabel.textContent = 'Title';
        let titleInput = document.createElement("input");
        titleInput.setAttribute('type','text');
        titleInput.setAttribute('id','titleInput');
        titleInput.value = toDoObject.title
        title.append(titleLabel,titleInput);
        formDiv.appendChild(title);


        let description = document.createElement('div');
        let descriptionLabel = document.createElement('label');
        descriptionLabel.textContent = 'Description';
        let descriptionInput = document.createElement("textarea");
        descriptionInput.setAttribute('id','descriptionInput');
        descriptionInput.value = toDoObject.description;
        description.append(descriptionLabel,descriptionInput);
        formDiv.appendChild(description);


        let project = document.createElement('div');
        let projectLabel = document.createElement('label');
        projectLabel.textContent = 'Project';
        let projectInput = document.createElement("input");
        projectInput.setAttribute('type','text');
        projectInput.value = toDoObject.project;
        projectInput.setAttribute('id','projectInput');
        project.append(projectLabel,projectInput);
        formDiv.appendChild(project);


        let note = document.createElement('div');
        let noteLabel = document.createElement('label');
        noteLabel.textContent = 'Note';
        let noteInput = document.createElement("textarea");
        noteInput.setAttribute('id','noteInput');
        noteInput.value = toDoObject.note;
        note.append(noteLabel,noteInput);
        formDiv.appendChild(note);


        let dueDate = document.createElement('div');
        let dueDateLabel = document.createElement('label');
        dueDateLabel.textContent = 'Due Date';
        let dueDateInput = document.createElement('input');
        dueDateInput.setAttribute('type','date');
        dueDateInput.setAttribute('id','dueDateInput');
        dueDateInput.value = toDoObject.dueDate;
        dueDate.append(dueDateLabel,dueDateInput);
        formDiv.appendChild(dueDate);


        let priority = document.createElement('div');
        let priorityLabel = document.createElement('label');
        priorityLabel.textContent = 'Priority';
        let priorityInput = document.createElement("input");
        priorityInput.setAttribute('type','text');
        priorityInput.setAttribute('id','priorityInput');
        priority.append(priorityLabel,priorityInput);
        formDiv.appendChild(priority);

        let buttons = document.createElement('div');
        let cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.classList.add('cancelButton');
        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add('createButton');
        buttons.append(cancelButton,editButton);
        formDiv.appendChild(buttons);
    
        editButton.addEventListener('click',()=>{
            toDoObject.title = titleInput.value;
            toDoObject.description = descriptionInput.value;
            toDoObject.project = projectInput.value;
            toDoObject.note = noteInput.value;
            toDoObject.dueDate = dueDateInput.value;
            toDoObject.priority = priorityInput.value;

            para.textContent = titleInput.value;
            date.textContent = dueDateInput.value;

            let dialog = document.querySelector('dialog');
            dialog.remove();


        });
        cancelButton.addEventListener('click',() => {
            let dialog = document.querySelector('dialog');
            dialog.remove();
        })


        dialog.appendChild(formDiv);
        content.appendChild(dialog);
        dialog.showModal();
        dialog.addEventListener('keydown',escapeKey);

    })

    
    
    let del = new Image();
    del.src = deleteClose;

    taskRightSide.append(note,details,date,edit,del);

    task.append(taskLeftSide,taskRightSide);
    tasks.appendChild(task);
    


}