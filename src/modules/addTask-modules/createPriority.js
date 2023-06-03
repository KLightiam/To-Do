export default function createPriority(parentDiv){
    let priority = document.createElement('div');
    let priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority';
    let priorityInput = document.createElement("input");
    priorityInput.setAttribute('type','text');
    priorityInput.setAttribute('id','priorityInput');
    priority.append(priorityLabel,priorityInput);
    parentDiv.appendChild(priority);
}