/**
 * Function:- A peice of re-usable code that we write when we needed n no.of times.
 * we have normal function, arguments we pass to function.
 */

displayMessage(); // can also call funnction before declaration

function displayMessage(){    // function declaration
    console.log(`Hello!! Welcome to Visual Studio Code`);
}

displayMessage(); // function calling
displayMessage();
displayMessage();

console.log("............................");

function userName(name){ //passing name as argument
    console.log(`${name}, Welcome to GeeksforGeeks Course!!`);
}

userName("Jayasri");
userName("Chinni");

console.log("............................");

function userNameCity(name, city){ //passing name and city as arguments
    console.log(`${name}, Welcome to GeeksforGeeks Course and thanks joining from ${city}`);
}

userNameCity("Jayasri", "Hyderabad");
userNameCity("Chinni", "Khammam");

console.log("............................");

function calculateSum(min, max){
    let sum = 0;
    for(let i = min; i <= max; i++){
        sum += i;
    }
    return sum;
}

const value = calculateSum(1, 20);
console.log(`The sum of min and max is ${value}`);

console.log("............................");

/**
 * anonymous functions or function expression are functions which doesn't have any identity or any name.
 * name function expression means writing function name to the anonymous function.
 */

// userDetails(); // cannot use anonymous, expression and name expression function before initializtion
// Age(); // error
// userAge(); // error
 
const userDetails = function () { // anonymous function no function name also known as function expression
    console.log("hello, there");
}

userDetails();

console.log("............................");

const userAge = function Age(){ // function name expression
    console.log('You are 18 years older');
}

userAge();

console.log("............................");

/**
 * return function means it have return as the last line of code
 * pure functions:- pure functions always have three imp points
 * 1. always return a value
 * 2. it accepts arguments
 * 3. the variables i.e., paramters type will not change like from string to boolean like that.
 */

function addition(x, y){
    return x + y; // returns value
}

const result = addition(10, 15);
console.log("Addition value:-", result);