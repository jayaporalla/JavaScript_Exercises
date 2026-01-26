// throttle is a function which run this function at most once in a given time
const container = document.querySelector(".container");

const throttle = (callback, delay) => {
    let isWaiting = false;
    return (...args) => {
        if(isWaiting) return;
        callback(...args);
        isWaiting = true;
        setTimeout(() => {
            isWaiting = false;
        }, delay);
    };
};

const handleScroll = () => {
    console.log("Scroll");
}

const throttledCalled = throttle(handleScroll, 500);

container.addEventListener("scroll", throttledCalled);