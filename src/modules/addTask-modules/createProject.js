export default function createProject(parentDiv){
    let project = document.createElement('div');
    let projectLabel = document.createElement('label');
    projectLabel.textContent = 'Project';
    let projectInput = document.createElement("input");
    projectInput.setAttribute('type','text');
    projectInput.setAttribute('id','projectInput');
    project.append(projectLabel,projectInput);
    parentDiv.appendChild(project);

}