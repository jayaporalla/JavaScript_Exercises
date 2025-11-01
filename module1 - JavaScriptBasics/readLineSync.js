// readline-sync is a one of package used to take input from user and do some operations acts like a bridge between
// user and console
const readlinesync = require("readline-sync");

const userName = readlinesync.question("What is your name? ");
const userAge = readlinesync.question("How old are you? ");
console.log(`Thank you for entering your details...
Your name:- ${userName}
Your Age:- ${userAge}`);