const array = [1, 2, 3, 4, 5, 4, 3, 4, 3, 2, 1, 6, 7, 5, 5, 3, 4, 4, 3];

function countFrequencyOfArray(array){
    const map = new Map();
    for(let char of array){
       map.set(char, (map.get(char) || 0) + 1);
    } 
    
    let max = 0;
    let result = 0;
    for(let [num, freq] of map){
        if(max < freq || (max === freq && num > result)){
            max = freq;
            result = num;
        } 
    }
    return result;
}

const result = countFrequencyOfArray(array);
console.log(result);