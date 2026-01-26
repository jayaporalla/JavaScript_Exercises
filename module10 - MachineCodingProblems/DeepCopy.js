const obj = {
    name: "Jayasri",
    age: 57,
    address: {
        city: "Kodad",
        state: "Telangana"
    }
}

function deepCopy(source){
    const copiedObj = {};
    const keys = Object.keys(source);
    for(let key of keys){
        if(typeof source[key] === "object"){
            copiedObj[key] = deepCopy(source[key]);
        } else {
            copiedObj[key] = source[key];
        }
    }
    return copiedObj;
}

const result = deepCopy(obj);
result.name = "Sassy";
result.address.city = "Khammam";
result.pincode = "123456";
console.log(obj);
console.log(result);