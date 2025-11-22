/**
 * arrow function:- updated version of writing or defining function in every logic and mostly preferred.
 */

// normal function
function add(x, y){
    return x + y;
}

const result = add(12, 15);
console.log(result);

console.log("............................");

//arrow function
const addition = (x, y) => x > y ? x + y : x - y;
console.log(addition(12, 10));
console.log(addition(10, 20));

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