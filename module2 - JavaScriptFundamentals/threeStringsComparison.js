const readlinesync = require("readline-sync");

const string1 = readlinesync.question("Enter your first string:- ");
const string2 = readlinesync.question("Enter your second string:- ");
const string3 = readlinesync.question("Enter your third string:- ");

// below code is based on string length comparison

if(string1.length < string2.length && string1.length < string3.length) {
    console.log(`${string1} is small string`);
} else if(string2.length < string1.length && string2.length < string3.length) {
    console.log(`${string2} is small string`);
} else if(string3.length < string1.length && string3.length < string2.length) {
    console.log(`${string3} is small string`);
} else {
    console.log("No string have less length or found two or more same length");
}

// below code is based on lexiographically comparison

if(string1 > string2 && string1 > string3) {
    console.log(`${string1} is highest lexographically`);
} else if(string2 > string1 && string2 > string3) {
    console.log(`${string2} is highest lexographically`);
} else {
    console.log(`${string3} is highest lexographically`);
}
