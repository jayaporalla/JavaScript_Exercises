/**
 * while loop first checks the condition and then exceute the code but do while is reverse it exceutes the code and then
 * check the condition
 */

let i = 1;

while (i < 10){
    console.log(i);
    i++;
}

console.log("................................");

do{
    console.log(i);
    i++;
} while(i > 15);

console.log("................................");

/**
 * When user enters less than 50 ask user to enter number again and ask user to enter number
 */

const readlinesync = require("readline-sync");
let number = readlinesync.question("Enter a number:- ");

// in IF case it only check once and again ask from starting not a proper way 

// if(number < 50){
//     console.log(`You entered ${number} number`);
// } else {
//     console.log(`${number} is greater than 50, please try again!`);
// }

// by using while loop it keep on asking until user enter less than 50 correct way to write. Just think about it.

while(number >= 50){
    number = readlinesync.question("Enter a number less than 50:- ");
}

console.log("Number accepted");