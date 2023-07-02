export default function sidebarButtonsAction(newToDoDOM,projects,counter){
    // let projectsArr = Object.values(projects);
    let homeButton = document.querySelector('#home');
    let todayButton = document.querySelector('#today');
    let tomorrowButton = document.querySelector('#tomorrow');
    let upcomingButton = document.querySelector('#upcoming');
    let tasks = document.querySelector('.tasks');

    homeButton.addEventListener('click',(event)=>{
        tasks.textContent = "";
        for(let toDo of Object.values(projects)){
            newToDoDOM(toDo,projects,counter);
            console.log(toDo);
        }
    });
}