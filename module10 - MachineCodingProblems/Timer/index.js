const timer = document.querySelector(".timer");
const btn = document.querySelector(".btn-container");

let seconds = 0;
let mintues = 0;
let hours = 0;
let timerId = 0;

function displayMessage(hours, mintues, seconds){
    timer.innerText = `${hours < 10 ? `0${hours}` : hours} : ${mintues < 10 ? `0${mintues}` : mintues} : ${seconds < 10 ? `0${seconds}` : seconds}`;
}

function onClickFunction(event){
    const click = event.target.name;
    if(click === "start"){
        timerId = setInterval(() => {
            seconds++;
            if(seconds > 59){
                seconds = 0;
                mintues++;
                if(mintues > 59){
                    mintues = 0;
                    hours++;
                }
            }
            displayMessage(hours, mintues, seconds);
        }, 100);
    }
    if(click === "stop"){
        clearInterval(timerId);
    }
    if(click === "reset"){
        clearInterval(timerId);
        seconds = mintues = hours = 0;
        displayMessage(hours, mintues, seconds);
    }
}

btn.addEventListener("click", onClickFunction);