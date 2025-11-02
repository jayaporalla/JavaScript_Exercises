/**
 * Logical Operators
 * && (AND) - All conditions must be true
 * || (OR) - At least one condition must be true
 * ! (NOT) - Negates a condition
 * Nullish Coalescing Operator (??) - Returns the right-hand operand when the left-hand operand is null or undefined
 */

const maths = 85;
const science = 75;
const physics = 95;
const social = 100;

// AND - every condition must be true
if(maths > 90 && science > 90 && physics > 100) {
    console.log("Elligle for eng...");
} else {
    console.log("Not elligle for eng...");
}

console.log("..............................");

// OR Condition - any one type can be true
if(maths > 90 || science > 90 || physics > 90) {
    console.log("Elligble for Engg...")
} else {
    console.log("Not elligle for eng...");
}

console.log("..............................");

const isElligble = false;
if(!isElligble){ - // NOT operator will change true to false and false to true
    console.log("Elligble");
} else {
    console.log("Not Elligble");
}

console.log("..............................");

/**
 * Truthy value
 * False Value:- "", 0, null, undefined - if we convert empty string into boolean give false value
 */

console.log(Boolean (""));
console.log(Boolean (" ")); // True bcz space also consider as true value

const firstName = "Jayasri";
const nickName = "Puppy";

const userName = firstName || nickName; // Short Circuting - means checking multiple values
/**
 * In OR Condition truthy value means converts string into boolean like Boolean (firstName) - true if value present false empty
 * checks first truthy value and in falsy case it checks last false value and give last value not first false value.
 * truth and false values are opposite.
 * While testing the code check every possibility
 * First checks truthy value if present console in the output if not present checks for falsy value and gives first false value.
 */
console.log(`Name - ${userName}`);

console.log("..............................");

let a = 12;
let b; //undefined
console.log(a + b); //NaN bcz b is undefined
console.log(a + (b || 0)); //12 output bcz in OR case it checks first truthy value if not found checks false value and take last value.

console.log("..............................");

const lastName = "Jayasri";
const nicName = "Puppy";

const result = lastName && nicName && "Jayasri Poralla";  // Short Circuting - means checking multiple values
/**
 * In AND Condition it will first checks first falsy value even it have truthy value it will checks false value and return it
 * If all truthy values are present it will give last truthy value.
 * In false value it will give first false value.
 * Try with different check cases.
 */
console.log(`Name - ${result}`);

console.log("..............................");

// Simple Exercises - OR
console.log(3 || 2 || 1); // everything converts into boolean while performing this operations
console.log("" || 0 || 2); // true || true || true
console.log("" || 0 || undefined); // true || true || false
console.log("" || "null" || 2);

// AND 
console.log(3 && 2 && 1);
console.log("" && 0 && 2);
console.log("undefined" || "null" || "");

console.log("..............................");

/**
 * Nullish Coalescing:- Ikada value undefined or null unte manaki ?? dheni tharvatha declare chesina value print ayithadhi
 */
let name; // edhi undefined so manaki Jayasri print ayithadhi "" or 0 una adhe print ayithadhi only null or undefined unte nullish work ayithadhi
// let name = "Sagar";
console.log(name ?? "Jayasri");