import { differenceInCalendarDays,isToday, isTomorrow } from "date-fns";


export default function sidebarButtonsAction(newToDoDOM,projects,counter){
    // let projectsArr = Object.values(projects);
    let addTaskButton = document.querySelector('#add-task-main > button');
    let addTaskDiv = document.querySelector('#add-task');

    let homeButton = document.querySelector('#home');
    let todayButton = document.querySelector('#today');
    let tomorrowButton = document.querySelector('#tomorrow');
    let upcomingButton = document.querySelector('#upcoming');
    let recurringTasksButton = document.querySelector('#recurring-tasks');
    let lowPriorityButton = document.querySelector('.low');
    let mediumPriorityButton = document.querySelector('.medium');
    let highPriorityButton = document.querySelector('.high');
    let projectDivs = document.querySelectorAll('#projects > details > div');



    let tasks = document.querySelector('.tasks');

    homeButton.addEventListener('click',(event)=>{
        tasks.textContent = "";
        addTaskButton.style.display = 'block';
        addTaskDiv.style.display = 'block';
        for(let toDo of Object.values(projects)){
            newToDoDOM(toDo,projects,counter);

            // console.log(toDo);
        }
    });

    todayButton.addEventListener('click',()=>{
        tasks.textContent = "";
        addTaskButton.style.display = 'none';
        addTaskDiv.style.display = 'none';
        for(let toDo of Object.values(projects)){
            if(isToday(new Date(toDo.dueDate))){
                newToDoDOM(toDo,projects,counter);
            }
        }
    })

    tomorrowButton.addEventListener('click',()=>{
        tasks.textContent = "";
        addTaskButton.style.display = 'none';
        addTaskDiv.style.display = 'none';
        for(let toDo of Object.values(projects)){
            if(isTomorrow(new Date(toDo.dueDate))){
                newToDoDOM(toDo,projects,counter);
            }
        }
    })

    upcomingButton.addEventListener('click',()=>{
        tasks.textContent = "";
        addTaskButton.style.display = 'none';
        addTaskDiv.style.display = 'none';
        for(let toDo of Object.values(projects)){
            if(((new Date(toDo.dueDate).getTime()) > (new Date().getTime())) && !(isTomorrow(new Date(toDo.dueDate)))){
                newToDoDOM(toDo,projects,counter);
            }
        }
    })

    recurringTasksButton.addEventListener('click',()=>{
        tasks.textContent = "";
        addTaskButton.style.display = 'none';
        addTaskDiv.style.display = 'none';
        for(let toDo of Object.values(projects)){
            if((differenceInCalendarDays(new Date(),new Date(toDo.dueDate)) >= 1) && (!(toDo.checkBox == 'checked'))){
                newToDoDOM(toDo,projects,counter);
            }
       } 
    })

    lowPriorityButton.addEventListener('click',()=>{
        tasks.textContent = "";
        addTaskButton.style.display = 'none';
        addTaskDiv.style.display = 'none';
        for(let toDo of Object.values(projects)){
            if(toDo.priority.toLowerCase() == 'low'){
                newToDoDOM(toDo,projects,counter);
            }
        }

    })

    mediumPriorityButton.addEventListener('click',()=>{
        tasks.textContent = "";
        addTaskButton.style.display = 'none';
        addTaskDiv.style.display = 'none';
        for(let toDo of Object.values(projects)){
            if(toDo.priority.toLowerCase() == 'medium'){
                newToDoDOM(toDo,projects,counter);
            }
        }

    })

    highPriorityButton.addEventListener('click',()=>{
        tasks.textContent = "";
        addTaskButton.style.display = 'none';
        addTaskDiv.style.display = 'none';
        for(let toDo of Object.values(projects)){
            if(toDo.priority.toLowerCase() == 'high'){
                newToDoDOM(toDo,projects,counter);
            }
        }

    })


    projectDivs.forEach((projectDiv)=>{
        projectDiv.addEventListener('click',(e)=>{
            // e.preventDefault();
            // console.log(e);
            tasks.textContent = "";
            addTaskButton.style.display = 'none';
            addTaskDiv.style.display = 'none';
            for(let toDo of Object.values(projects)){
                if(toDo.project.toLowerCase() == projectDiv.textContent.toLowerCase()){
                    newToDoDOM(toDo,projects,counter);
                    
                }
            }
        })
    })
}