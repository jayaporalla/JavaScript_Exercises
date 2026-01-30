/** 
 * var variable:- we can intitalize and declare separate no error cause from this and also can use same 
 * variable name for different values of data
 * like example:- 
 * var name = "Jayasri"
 * var name = "Joe"
 * var name = "Dohn"
 * so no error for this works perfectly fine
 * first we can declare
 * then later we can initialize
 * then later we can update the value
 */
var name;
name = "Jayasri";
console.log(name);
name = "Puppy";
console.log(name);

console.log("----------------------");

/**
 * let variable:- we can initialize and declare later for this no error will generate, 
 * but if want to use same variable for different data
 * values it will generate error like example:-
 * let name = "Jayasri"
 * let name = "John" // in this line it will generate error
 * first we can declare
 * then we can update the value
 * but we cannot use same variable name for multiple values
 * 
 * let is also known as block level variable
 */

let username;
username = "Some";
console.log(username);
username = "nothing";
console.log(username);

console.log("----------------------");

/**
 * const variable:- we have to declare and initialize at the same time, 
 * if not it will generate error and we cannot update the const variable
 * and cannot use same variable for assigning different data like example:-
 * const name = "Jayasri"
 * const name = "None" // generate error cannot use
 * first we have to declare and initialize at the same time
 * cannot update value later
 * cannot use same variable name for multiple data values 
 * 
 * 1. const is prefered first in Javascript to store values rather than var and let
 * 2. next let is prefered in Javascript rather than var
 * 3. at last will prefer var in Javascipt but rarely used
 */

// const myName; //here will get error because intilzation and declaration should be done at same time
const myName = "Satya";
console.log(myName);
// myName = "Narayana"; //here error because cannot update value because it is constant
// console.log(myName);

console.log("----------------------");

/**
 * Variables can start with alphabets, underscore (_), dollar ($), cannot start with number but can end with number.
 * But always make sure that variable name should give with meaning full variable name.
 * Example:- userName, userAge, userAddress, totalAmount - all are meaning full names and have camel casing.
 * shouldn't give some dollar or underscore sign we can give but it don't have meaning full variable name.
 * mostly use camel casing avoid giving underscore and dollar sign for naming a variable.
 */

let _ = "25";
console.log(_);

let $ = 25;
console.log($);