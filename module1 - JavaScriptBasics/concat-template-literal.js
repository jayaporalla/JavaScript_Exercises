/**
 * Concat is used to add two sentences together
 * Template Literal is a very advanced way comapred to it and good in implementation
 */

let userName = "Jayasri";
let userAge = 25;

let combinedText = "My name is " + userName + " and I am " + userAge + " years Old.";
console.log(combinedText);

let combinedTemplate = `My name is ${userName} and I am ${userAge} years Old.`
console.log(combinedTemplate);

let spacedText = `My name is ${userName}
                 and I am ${userAge} years Old 
and I love to do cooking
and I love to do coding to improve and upgrade skills`;
console.log(spacedText);