const str = "The quick browm fox jumps over the lazy dog";

function vowelsRemove(str){
    const vowels = 'aeiou';
    let result = "";
    for(let i = 0; i < str.length; i++){
        if(!vowels.includes(str[i].toLowerCase())){
            result += str[i];
        }
    }
    return result;
}

const result = vowelsRemove(str);
console.log(result);