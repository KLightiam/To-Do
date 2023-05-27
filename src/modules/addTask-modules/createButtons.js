export default function createButtons(parentDiv){
    let buttons = document.createElement('div');
    let cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    let createButton = document.createElement("button");
    createButton.textContent = "Create"
    buttons.append(cancelButton,createButton);
    parentDiv.appendChild(buttons);
}