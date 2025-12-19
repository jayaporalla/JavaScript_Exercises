const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function oddEvenViceVersa(array){
    let even = [];
    let odd = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            even.push(array[i]);
        }
        if(array[i] % 2 !== 0){
            odd.push(array[i]);
        }
    }
    return [even, odd];
}

const result = oddEvenViceVersa(array);
console.log(result);