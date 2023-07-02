import { isToday, isTomorrow } from "date-fns";

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

    todayButton.addEventListener('click',()=>{
        tasks.textContent = "";
        for(let toDo of Object.values(projects)){
            if(isToday(new Date(toDo.dueDate))){
                newToDoDOM(toDo,projects,counter);
            }
        }
    })

    tomorrowButton.addEventListener('click',()=>{
        tasks.textContent = "";
        for(let toDo of Object.values(projects)){
            if(isTomorrow(new Date(toDo.dueDate))){
                newToDoDOM(toDo,projects,counter);
            }
        }
    })

    upcomingButton.addEventListener('click',()=>{
        tasks.textContent = "";
        for(let toDo of Object.values(projects)){
            if(((new Date(toDo.dueDate).getTime()) > (new Date().getTime())) && !(isTomorrow(new Date(toDo.dueDate)))){
                newToDoDOM(toDo,projects,counter);
            }
        }
    })
}