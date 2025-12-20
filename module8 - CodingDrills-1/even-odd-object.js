const array = [1, 2, 3, 4, 5, 6];

function evenOddObject(array){
    let even = 0;
    let odd = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            even += array[i];
        } else {
            odd += array[i];
        }
    }
    return {even, odd};
}

const result = evenOddObject(array);
console.log(result);

console.log("------------------------");

const object = [
    {
        name: "Jayasri",
        age: 56
    },
    {
        name: "Prakash",
        age: 52
    },
    {
        name: "Chinni",
        age: 30
    },
    {
        name: "Uma",
        age: 27
    }
]

const averageAge = object.map(employee => employee.age).reduce((acc, curr) => acc + curr, 0);
console.log(averageAge / object.length);