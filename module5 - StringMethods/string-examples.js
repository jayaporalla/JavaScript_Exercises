/**
 * includes method checks whether second string or character present in first text and always give boolean as return value
 */

const string1 = "Love to code and Love to watch movies";
console.log(string1.includes("Love")); // give boolean as return value

console.log("..........................");

const firstString = "I love to code and love to eat";
const secondString = "aeiouAEIOU"; // here we included AEIOU capital but no need can convert firstString to lowercase.
let flag = false;

// way 1 - but it prints repetitve console statements on the terminal
for(let char of firstString){
    if(secondString.includes(char)) {
        console.log("firstString have vowels");
    } else {
        console.log("firstString doesn't have vowels");
    }
}

console.log("..........................");
// way 2 - prints less console statements and using good logic
for(let char of firstString) {
    if(secondString.includes(char)) {
        flag = true;
        break;
    } else {
        flag = false;
    }
}

if(flag === true) {
    console.log("string have vowels");
} else {
    console.log("string doesn't have vowels");
}

console.log("..........................");

/**
 * touppercase and tolowercase
 */

console.log(`lower case string - ${firstString.toLowerCase()}`);
console.log(`upper case string - ${firstString.toUpperCase()}`);

console.log("..........................");

/** 
 * substring method or slice method both are same but substring is more semantic compared to slice and trim method - used to remove space
 */

const userName = "Jayasri Poralla";
console.log(userName.substring(0, 9)); // but substring is more semantic 
console.log(userName.slice(0, 9) + ".....");

console.log("..........................");

const userMessage = "           Hola! How are you doing?    "
console.log(userMessage); // return output as space
console.log(userMessage.trim()); // return output without space by removing adjacents on it.