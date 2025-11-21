const readlinesync = require("readline-sync");

const marks = readlinesync.question("Enter your marks:- ");

// normal if else condition
if(marks > 60){
    console.log("You are Passed, Great!!");
} else {
    console.log("You are failed. Better luck next time!!");
}

// Ternary condition replacing if else condition
const result = (marks > 60) ? console.log("You are Passed, Great!!") : console.log("You are failed. Better luck next time!!");

// multiple if else if conditions
const resutls = (marks < 40) ? "C grade" : (marks < 70) ? "B grade" : (marks < 90) ? "A grade" : "A+ grade";
console.log(resutls);