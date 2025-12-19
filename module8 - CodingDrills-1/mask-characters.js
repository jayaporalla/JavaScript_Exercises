const str = "1234567899874";

function maskString(str){
    let result = "";
    let sum = "";
    for(let i = 0; i < str.length - 4; i++){
        sum += str[i];
    }
    for(let i = str.length - 4; i < str.length; i++){
        result = result + "#";
    }
    return sum + result;
}

const result = maskString(str);
console.log(result);