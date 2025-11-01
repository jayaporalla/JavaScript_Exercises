console.log(2 > 3); //false
console.log("3" > "1"); //true
console.log("6" < 6 ); //false
console.log(6 == 6); //true
console.log("7" == 7); // true string converts into number

console.log(null == undefined); //true
console.log(null > 0); //false
console.log(null < 1); //true bcz null converts to 0 when we do comparison with numbers.

console.log(null === undefined); // false - strict quality check
console.log("7" === 7); //false. In Strict equality it will check value and type both.