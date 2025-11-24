/**
 * Array is an non - primitive data type which are multable - which can change and strings are unmutable - which cannot change
 */

// way 1
const studentName = ["Jayasri", "Puppy", "Chinni", "Adarsh", "Likii", "Uma", "Satya"];
for(let i = 0; i < studentName.length; i++) {
    console.log(studentName[i]);
}

console.log("..........................");

// way 2
for(let name of studentName) {
    console.log(name);
}

console.log("..........................");

// way 3
for(let student in studentName) {
    console.log(student); // prints index value
    console.log(studentName[student]); // prints array values
}

console.log("..........................");

/**
 * push and concat methods in array
 */
studentName.push("Leeminho");
studentName.push("Chechi");
console.log(studentName);

console.log("..........................");

const arr1 = ["1", "2", "3"];
const arr2 = ["4", "5", "6"];
console.log(arr1.concat(arr2));
const arr3 = ["7", "8", "9"];
console.log(arr1.concat(arr2, arr3)); // can also add multiple arrays into single it will not change anything just create new one.

console.log("..........................");

/**
 * pop - used to remove last element from array
 * slice - used to separate array with the only required elements from the original array
 * splice - used to remove and also can add in the  array
 */

// pop removed last element
studentName.pop();
console.log(studentName);

//slice used to remove specified array size elements
console.log(studentName.slice(6)); // we got separate array from the original one means it gives array after 6 index
console.log(studentName); // original array

// splice can use in two ways one to add and second to remove
console.log(studentName.splice(5, 2));  // see here we removed Uma and Satya
console.log(studentName); // so based on above in final array we don't have those two values

// splice used to add elements in between also
studentName.splice(5, 0, "Nanna"); // 0 tells don't remove and 5 means add before 5 
console.log(studentName); // Nanna added before Leeminho

console.log("..........................");

/**
 * includes method check whether secondString is present or not in firstString and it returns boolean value
 */
console.log(studentName.includes("Puppy"));
console.log(studentName.includes("Nana"));