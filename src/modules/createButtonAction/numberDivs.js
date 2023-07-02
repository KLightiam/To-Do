import {isToday,isTomorrow,subDays} from "date-fns";



export default function numberDivs(projects){
    // clearInterval(viewInterval);
    
    let homeNum = document.querySelector('#home > .number');
    let todayNum = document.querySelector('#today > .number');
    let tomorrowNum = document.querySelector('#tomorrow > .number');
    let upcomingNum = document.querySelector('#upcoming .number');
    let projectsNum = document.querySelector('#projects > .number');
    let recurringTasksNum = document.querySelector('#recurring-tasks > .number');

    homeNum.textContent = Object.keys(projects).length;



    let NumCounter = 0;
    for(let toDo of Object.values(projects)){
        if(toDo.project){
            NumCounter++;
        }
        projectsNum.textContent = NumCounter;
    }

    let timer = 1000;
    let viewInterval = setInterval(function(){
        clearInterval(viewInterval);
        let todayNumCounter = 0;
        let tomorrowNumCounter = 0;
        let upcomingNumCounter = 0;
        for(let toDo of Object.values(projects)){
            if(isToday(new Date(toDo.dueDate))){
                todayNumCounter++;
                todayNum.textContent = todayNumCounter;      
            }
            else if(isTomorrow(new Date(toDo.dueDate))){
                tomorrowNumCounter++;
                tomorrowNum.textContent = tomorrowNumCounter;
            }
            else if((new Date(toDo.dueDate).getTime()) > (new Date().getTime())){
                upcomingNumCounter++;
                upcomingNum.textContent = upcomingNumCounter;
            }
            
        }    
    },timer)


}