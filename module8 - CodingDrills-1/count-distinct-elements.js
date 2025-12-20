const array = ["a", "b", "c", "c", "d", "e", "b", "f", "a"];

function countDistinct(array){
    const map = new Map();
    
    for(let char of array){
        if(map.has(char)){
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }
    
    return map;
}

const result = countDistinct(array);
console.log(result);