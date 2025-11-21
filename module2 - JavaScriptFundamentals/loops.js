/**
 * For loop is used to perform some repetitve tasks in our code
 * for(intialize / starting value; condition; incrementValue / decrementValue)
 */
let i;
for(i = 0; i < 10; i++){ //here i defined out to print the value in console for complete loop execution.
    console.log(i);
    console.log("Hello....");
}
console.log(i); // Print value out of loop value
console.log("Loop execution done!!");

console.log(".................................");

for(let i = 1; i <= 100; i++){
    console.log(i);
}

console.log(".................................");

const userName = "Jayasri Poralla Puppy";
console.log('userName - ', userName);
console.log("userName length - ", userName.length);
console.log(userName[0]);

for(let i = 0; i < userName.length; i++){ //This loop prints every character on each line by line.
    console.log(userName[i]);
}

console.log(".................................");

// Nested for loop - best example of table - multiplication
for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} - ${i * j}`);
    }
    console.log("...........");
}

// Exercise Problems for For Loop

/** Star Pattern
 * *
 * * *
 * * * *
 * * * * * 
 * * * * * *
 */

// console.log("*");
// console.log("* *");
// console.log("* * *");
// console.log("* * * *");

// const symbol = "* ";
// console.log(symbol.repeat(1));
// console.log(symbol.repeat(2));
// console.log(symbol.repeat(3));
// console.log(symbol.repeat(4));

// for(let i = 1; i <= 4; i++){
//     console.log(symbol.repeat(i));
// }

let n = 4;
for(let i = 1; i <= n; i++){
    let row = "";
    for(let j = 1; j <= i; j++){
        row += "* ";
    }
    console.log(row);
}

console.log(".................................");

/**
 * Reverse Pattern
 *         *
 *       * *
 *     * * *
 *   * * * *
 * * * * * *
 */
let r = 4;
for (let i = 1; i <= r; i++) {
    let row = "";
    for (let j = 1; j <= r - i; j++) {
        row += "  "; 
    }
    for (let k = 1; k <= i; k++) {
        row += "* ";
    }

    console.log(row);
}

console.log(".................................");

const symbol = "* ";
for(let i = 1; i <= 5; i++){
    console.log(symbol.repeat(i));
} 
for(let i = 4; i >= 1; i--){
    console.log(symbol.repeat(i));
}

console.log(".................................");

for (let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        console.log(`${i} is a even number`);
    }
}