const readlinesync = require("readline-sync");

const userAge = readlinesync.question("How old are you? ");

/**
 * can write multiple if, else if, else conditions based on requirements
 */

if(userAge > 18) {
    console.log("Hey you are in teenage now!");
} else {
    console.log("Hey you are under 18!");
}


console.log("---------------------------------");

/**
 * The below code is nested if else if condition statements
 */

const Number = readlinesync.question("Enter a Number:- ");

if(Number % 2 === 0){
    console.log(`${Number} is divisible by 2`);
    if(Number % 4 === 0){
        console.log(`${Number} is divisible by 4`);
    } else {
        console.log(`${Number} is not divisible by 4`);
    }
} else {
    console.log(`${Number} is not divisible by 2`);
    if(Number % 5 === 0){
        console.log(`${Number} is divisible by 5`);
    } else {
        console.log(`${Number} is not divisible by 5`);
    }
}