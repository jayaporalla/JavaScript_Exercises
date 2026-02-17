let arr = [1, 2, 3, 4, 5];

function square(number){
    return number ** 2;
}

Array.prototype.myMap = function (callback){
    let tempArr = [];
    for(let i=0; i<this.length; i++){
        tempArr.push(callback(this[i], i, this));
    }
    return tempArr;
}

const result = arr.myMap(square);
console.log("Map: ");
console.log(result);

console.log(".................................");

function checkNumber(number){
    return number > 3;
}

Array.prototype.myFilter = function (callback) {
    let tempArr = [];
    for(let i=0; i<this.length; i++){
        if(callback.call(this, this[i], i, this)){
        // if(callback(this[i])){
            tempArr.push(this[i]);
        }
    }
    return tempArr;
}

const result1 = arr.myFilter(checkNumber);
console.log(`Filter:`);
console.log(result1);

console.log(".................................");

function sum(acc, curr){
    return acc + curr;
}

Array.prototype.myReduce = function (callback, initialValue){
    let acc = initialValue ? initialValue : this[0];
    for(let i=initialValue ? 0 : 1; i<this.length; i++){
        acc = callback.call(this, acc, this[i], i, this);
    }
    return acc;
}

// const reduceResult = arr.myReduce(sum);
const reduceResult = arr.myReduce(sum, 10);
console.log("Reduce: " + reduceResult);

console.log(".................................");

const example = [1, 2, 3, [4, 5], [[6, 7, 8, 9]], 10, 11, [[[12, 13, 14, 15]]]];

Array.prototype.myFlatten = function (depth = 1){
    let tempArr = [];
    function flatArray(array, depth){
        for(let element of array){
            if(Array.isArray(element) && depth){
                flatArray(element, depth - 1);
            } else {
                tempArr.push(element);
            }
        }
    }
    flatArray(this, depth);
    return tempArr;
}

const flatten = example.myFlatten(4);
console.log("Flatten: ");
console.log(flatten);

console.log(".................................");

const object = {
    name: "Sassy",
    city: "Khammam"
}

function displayUserInfo(state){
    console.log(`Hi, ${this.name}. Thanks for joining from your ${this.city}, ${state}`)
}

Function.prototype.myCall = function (context, ...args){
    context.showMessage = this;
    context.showMessage(...args);
    delete context.showMessage;
}

Function.prototype.myApply = function (context, args){
    context.showMessage = this;
    context.showMessage(...args);
    delete context.showMessage;
}

Function.prototype.myBind = function (context, ...args){
    context.wrapperFunc = this;
    return function(...rest){
        context.wrapperFunc(...args, ...rest);
        delete context.wrapperFunc;
    }
}

displayUserInfo.myCall(object, "Telangana");
displayUserInfo.myApply(object, ["Telangana"]);
const bindResult = displayUserInfo.bind(object, "Hyderabad");
bindResult();
// bindResult("Telangana");