/**
 * JavaScript have 5 data types:- 1 to 5 types are Primitive type and last one is Non-Primitive type
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Null
 * 5. Undefined
 * 6. Object
 */

let num = 42; // Number
console.log(num);
console.log(typeof num);

console.log("---------------");

let userName = "Jayasri"; //String
console.log(userName);
console.log(typeof userName);

console.log("---------------");

let isLoggedIn = true; // Boolean
console.log(isLoggedIn);
console.log(typeof isLoggedIn);

console.log("---------------");

let name; //Undefined
console.log(name);
console.log(typeof name);

console.log("---------------");

let userAge = null; //null
console.log(userAge);
console.log(typeof userAge); //here null is object

console.log("---------------");

let array = {      //Object array also known as Non-Primitive Data type
    name: "Jaya",
    age: 21,
    Gender: 'M'
}
console.log(array);
console.log(typeof array);