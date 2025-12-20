const str = "react is a library";

function reverseWords(str){
    const array = str.split(" ");
    const result = array.map(word => word.split("").reverse().join(""));
    return result;
}

const result = reverseWords(str);
console.log(result);