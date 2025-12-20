const str = "gfg is a comp science learning platform"

function wordsLengthInAscendingOrder(str){
    const array = str.split(" ");
    array.sort((a, b) => a.length - b.length);
    return array;
}

const result = wordsLengthInAscendingOrder(str);
console.log(result);