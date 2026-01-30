/**
 * sort method is used to sort the things in ASC or DESC. 
 * In sorting it will compare values and checks which is bigger and smaller based on that operation will be done
 */

const fruits = ["apple", "banana", "kiwi", "orange", "mango", "guva"];
console.log(fruits.sort((a, b) => a.length - b.length));
fruits.sort();
console.log(fruits);

console.log("..........................");

//In numbers if we use sort method will get error so we have to use some defined function like below in order to get correct output
const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 8, 22, 33, 56, 87];

function sortInAsc(a, b) {
    return a - b;
}

function sortInDesc(a, b) {
    return b - a;
}

console.log(numbers.sort(sortInAsc));
console.log(numbers.sort(sortInDesc));

console.log("..........................");

/**
 * split - used to split the string into characters. split is a string function
 * join - used to join splited characters or words into single - join is a array function
 */

const userName = "Jayasri";
console.log(userName.split("").reverse().join(""));

console.log("..........................");

/**
 * spread opeartor mostly used everywhere. In fucntion will use rest operator in array will use spread operator
 */

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbersArray); // this will print complete array
console.log(...numbersArray); // this separate every number into a single peice. so we can use which one we want

console.log("..........................");

/**
 * destructing means unpacking object and using with some variable name.
 * In objects it is more useful. Ex:- fetching data from backend and using required data at some feilds.
 */

const destruct = [1, 2, 3, 4, 5, ["html", "css", "js"]];
const [a, b, c, d, e, courses] = destruct
console.log(c);
console.log(courses);

console.log("..........................");

const destructArray = [["html", "css", "js"], 1, 2, 3, 4, 5];
const [course, ...k] = destructArray; // ...k is rest operator
console.log(course);
console.log(...course); // here i am destructing course it is not an array.
console.log(k);

console.log("..........................");

/**
 * copy by reference - array reference means pointing to the same memory location also known as Shallow Copy
 */

const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1;

arr2.push(6);
console.log("arr1 - ", arr1); // here i push 6 into arr2 but it got updated into arr1 also 
// due to both referring to the same memory location in order to avoid that will use spread operator
console.log("arr2 - ", arr2);

console.log("..........................");

const arr3 = [...arr1];
arr3.push(7);
console.log("arr3 - ", arr3); // here 7 is added only in arr3 not arr1 that is power of spread operator
// and we can define whatever we want like in array or like in normal currly brackets by spreading it.
console.log("arr1 - ", arr1);