


export default function numberDivs(projects){
    let homeNum = document.querySelector('#home > .number');
    let todayNum = document.querySelector('#today > .number');
    let tomorrowNum = document.querySelector('#tomorrow > .number');
    let upcomingNum = document.querySelector('#upcoming .number');
    let projectsNum = document.querySelector('#projects > .number');
    let recurringTasksNum = document.querySelector('#recurring-tasks > .number');

    homeNum.textContent = Object.keys(projects).length;

    let projectsNumCounter = 0;
    for(let toDo of Object.values(projects)){
        if(toDo.project){
            projectsNumCounter++;
        }
        projectsNum.textContent = projectsNumCounter;
    }

}