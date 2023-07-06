import {differenceInCalendarDays, isToday,isTomorrow,subDays} from "date-fns";



export default function numberDivs(projects){
    // if(viewInterval){
    //     clearInterval(viewInterval);
    // }
    
    let homeNum = document.querySelector('#home > .number');
    let todayNum = document.querySelector('#today > .number');
    let tomorrowNum = document.querySelector('#tomorrow > .number');
    let upcomingNum = document.querySelector('#upcoming .number');
    let projectsNum = document.querySelector('#projects > .number');
    let recurringTasksNum = document.querySelector('#recurring-tasks > .number');

    homeNum.textContent = Object.keys(projects).length;

    let projectDivs = document.querySelectorAll('#projects > details > div');



    let NumCounter = 0;
    for(let toDo of Object.values(projects)){
        if(toDo.project){
            if(projectDivs.length == 0){
                NumCounter++;
            }
            for(let i=0; i < projectDivs.length;){
                if(toDo.project.toLowerCase() != projectDivs[i].textContent.toLowerCase()){
                    i++;
                }
                else{
                    break;
                }
                if(i == projectDivs.length){
                    NumCounter++;
                }
        }
        projectsNum.textContent = NumCounter + projectDivs.length;
    }
}

    let timer = 1000;
    let viewInterval = setInterval(function(){
        // clearInterval(viewInterval);
        let todayNumCounter = 0;
        let tomorrowNumCounter = 0;
        let upcomingNumCounter = 0;
        let recurringNumCounter = 0;

        todayNum.textContent = 0;
        tomorrowNum.textContent = 0;
        upcomingNum.textContent = 0;
        // projectsNum.textContent = 0;
        recurringTasksNum.textContent = 0;

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
            else if((differenceInCalendarDays(new Date(),new Date(toDo.dueDate)) >= 1) && (!(toDo.checkBox == 'checked'))){
                recurringNumCounter++;
                recurringTasksNum.textContent = recurringNumCounter;
                // console.log(recurringNumCounter);
            }
            
        }    
    },timer)


}