export default function toDoObject(){
    let title = document.querySelector('#titleInput').value;
    let description = document.querySelector('#descriptionInput').value;
    let project = document.querySelector('#projectInput').value;
    let note = document.querySelector('#noteInput').value;
    let dueDate = document.querySelector('#dueDateInput').value;
    let priority = document.querySelector('#priorityInput').value;
    return{title,description,project,note,dueDate,priority}
}