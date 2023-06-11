// import toDoObject from "../createButtonAction/toDoObject";


export default function viewNote(){
    let content = document.querySelector('.content');
    let dialog = document.createElement('dialog');
    let heading = document.createElement('h1');
    heading.textContent = "Note";
    let note = document.createElement('p');
    note.textContent = toDoObject.note;

    dialog.append(heading,note);
    content.appendChild(dialog);

}