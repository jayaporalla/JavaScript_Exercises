/**
 * about array, map, and set
 */

const studentsId = new Array();
console.log({studentsId});

studentsId.push(1);
studentsId.push(2);
studentsId.push(1);

console.log({studentsId}); // giving duplicate values also becuase it is an array not set

console.log("............................");

const newStudent = new Set();
console.log({newStudent});
newStudent.add(1);
newStudent.add(2);
newStudent.add(1);
newStudent.add(4);
// newStudent.delete(1); //provide value not key in order to delete that value from set
// newStudent.clear();
//console.log(newStudent.size);
console.log({newStudent}); // remove duplicate values
newStudent.forEach((value, key) => console.log(`${key}: ${value}`));

console.log("............................");

const data = [1, 2, 3, 4, 1, 5, 2, 3]; 
const dataSet = new Set(data); // here I am changing data into set because it will give unique values
const arraySet = [...dataSet]; //here I am spreading or destructing the set in order to get result as array.
console.log(arraySet);

console.log("............................");

const map = new Map();
map.set(10, 'Value is somewhere');
map.set(20, 'I am here');
console.log({map});
map.forEach((value, key) => console.log(`${key} => ${value}`));
console.log([...map.keys()]);