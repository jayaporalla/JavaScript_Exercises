const message = "I love to code and love to eat";
// way - 1
for(let char of message){
    console.log(char);
}

console.log("..........................");

// way 2
for(let i = 0; i < message.length; i++){
    console.log(message[i]);
}

console.log("..........................");

// conditional checking and priniting
for(let char of message){
    if(char === 'o'){
        break;
    } else {
        console.log(char);
    }
}

console.log("..........................");

/**
 * basically all built-in are methods in string so they may return value or they may just function.
 * string - charAt and charCodeAt
 * charAt method gives character at that particular index
 * charCodeAt gives ASCII code of character at that index
 * when we try to ask character out of length of string it will not throw any error it simply shows empty or space in console
 */

const value = "Hello! I am Jayasri, Nice to meet you!!"
const index = 9;
console.log(`The character at index ${index} is ${value.charAt(index)}`); //mostly prefer using template literal rather than "" or ''

console.log("..........................");

console.log(`The ASCII code of character ${value.charAt(index)} is ${value.charCodeAt(index)}`);

console.log("..........................");

/**
 * indexOf method checks second text in first text starting index.
 * if second text not found in first it will return -1 will not show any error.
 */

function characterFind(text, char){
    // const index = text.indexOf(char);
    //if we want index to search after a particular index value we can provide that too.
     const index = text.indexOf(char, 4);
    return index;
}

console.log(characterFind("Hello, Sassyl!", "l"));

// here in place of above function we can use updated arrow function
