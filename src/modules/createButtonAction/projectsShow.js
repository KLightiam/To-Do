

export default function projectsShow(toDoObject){
    let projectDivs = document.querySelectorAll('#projects > details > div');
    if(projectDivs.length == 0){
        let projectsDetails = document.querySelector('#projects > details');
        let newProject = document.createElement('div');
        newProject.textContent = toDoObject.project;
        projectsDetails.appendChild(newProject);
    }
    for(let i=0; i < projectDivs.length;){
        if(toDoObject.project.toLowerCase() != projectDivs[i].textContent.toLowerCase()){
            i++;
        }
        else{
            break;
        }
        if(i == projectDivs.length){
            let projectsDetails = document.querySelector('#projects > details');
            let newProject = document.createElement('div');
            newProject.textContent = toDoObject.project;
            projectsDetails.appendChild(newProject);
        }
    }

}