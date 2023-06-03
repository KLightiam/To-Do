export default function createDueDate(parentDiv){
    let dueDate = document.createElement('div');
    let dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date';
    let dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('type','date');
    dueDateInput.setAttribute('id','dueDateInput');
    dueDate.append(dueDateLabel,dueDateInput);
    parentDiv.appendChild(dueDate);
}