const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = array.map(num => num % 2 === 0 ? num - 1 : num + 1);
console.log(result);

const array1 = [12, 20, 33, 45, 63, 78, 90, 10];
const result1 = array1.reduce((acc, curr) => curr < 40 ? acc + curr : acc, 0);
console.log(result1);