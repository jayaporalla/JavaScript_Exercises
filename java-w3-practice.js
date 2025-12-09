const arr = [1, 2, 3, 4, 5, 6];
const map = arr.map(number => number ** 2);
console.log(map);

const filter = arr.filter(number => number > 1);
console.log(filter);

const reduce = arr.reduce((acc, cur) => acc + cur, 0);
console.log(reduce);

/**
 * scope and scope chain lexical environment forms based on scope chain.
 */

let a = 10;
let b = 20;
let c = 25;
function x(){
    console.log(a);
    function y(){
        console.log(b);
        function z(){
            console.log(c);
        }
        z();
    }
    y();
}
x();