/**
 * try and catch are used to solve the error and continue the code exceution without any breaks of it
 */

const userName = "Jayasri";
try{
    console.log(myName);
    console.log("Hey there");
} catch(error){
    console.log(error.name); //tells error name
    console.log(error.message); //tells what is the error
    console.log(error.stack); //shows where is the error getting
    console.log("error occured");
} finally{
    console.log("finally executed!!"); //runs this block irrespective of error
}

console.log(userName);