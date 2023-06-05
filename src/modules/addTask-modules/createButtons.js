import createButtonAction from './createButtonAction';


export default function createButtons(parentDiv){
    let buttons = document.createElement('div');
    let cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.classList.add('cancelButton');
    let createButton = document.createElement("button");
    createButton.textContent = "Create";
    createButton.classList.add('createButton');
    buttons.append(cancelButton,createButton);
    parentDiv.appendChild(buttons);

    createButton.addEventListener('click',createButtonAction);
    cancelButton.addEventListener('click',() => {
        let dialog = document.querySelector('dialog');
        dialog.remove();
    })
}