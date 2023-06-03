export default function createDescription(parentDiv){
    let description = document.createElement('div');
    let descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description';
    let descriptionInput = document.createElement("textarea");
    descriptionInput.setAttribute('id','descriptionInput');
    description.append(descriptionLabel,descriptionInput);
    parentDiv.appendChild(description);
}