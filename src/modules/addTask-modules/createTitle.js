export default function createTitle(parentDiv){
    let title = document.createElement('div');
    let titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title';
    let titleInput = document.createElement("input");
    titleInput.setAttribute('type','text');
    titleInput.setAttribute('id','titleInput');
    title.append(titleLabel,titleInput);
    parentDiv.appendChild(title);
}