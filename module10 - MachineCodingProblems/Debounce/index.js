const textBox = document.querySelector(".search");

function inputHanlder(event){
    console.log(event.target.value);
}

function debounce(callback, delay){
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            callback(...args);
        }, delay);
    }
}
const debounced = debounce(inputHanlder, 500);
textBox.addEventListener("keyup", debounced);