/**
 * object is a very complex in javascript which also very important and useful. used to fetch data from backend
 * every response that we get is in the form of object.
 * object can have multiple nested things.
 * Object -> {key: value}, combination of key and value is a property of a object
 * every key should be string. if it not string implicitly it converts into string and value can be anything.
 */

const obj = {
    name: "Jayasri", // every line is a property
    age: 24,
    job: "Full Stack Developer",
    "is Admin": true // here we are using two words is Admin as separate with no underscore so placed in double quotes
}

console.log(obj);
console.log(obj.name); // we can define in two ways with . and []
console.log(obj.job); // here every key implicity will convert into string so need to mention in double quotes
console.log(obj["is Admin"]);
console.log(obj["age"]); // here key will not convert we have to metion in the format of string otherwise it won't work

console.log("..........................");

/**
 * function as property
 */

const details = {
    age: 65,
    greetMessage: function() {     // decaring functions in anonymous type
        console.log("Hello, there!!")
    },
    bye(){ // this is also declaring a function as property in object
        console.log("Bye Bye")
    }
}

console.log(details);
details.greetMessage();
console.log(details.bye);
details.bye();

console.log("..........................");