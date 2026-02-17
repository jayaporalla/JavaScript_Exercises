var x = 15;
var y = 10;

var x = "15";
var y = "10"; // for addition it will concat and for remaining operations it will convert internally from string to number

var x = "Apple";
var y = "Mango"; // only concat operation performed remaining operations shows NaN means Not a Number

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** 2);
console.log(y ** 2);