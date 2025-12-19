const str = "prakash";

function encodedCharacters(str){
    let result = "";
    let pos = 0;
    for(let i = 0; i < str.length; i++){
        pos = str.charCodeAt(i);
        pos = pos + 2;
        result += String.fromCharCode(pos);
    }
    return result;
}

const result = encodedCharacters(str);
console.log(result);