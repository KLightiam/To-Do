

export default function projectsAction(projects){
    let projectDivs = document.querySelectorAll('#projects > details > div');
    for(let project of projectDivs){
        for(let toDO of projects){
            if(project.textContent != toDO.project.toLowerCase()){
                
            } 
        }
    }

}