'use strict';

console.log(check);
var check; 
check = "string";
console.log(check);
console.log(test)
let test = "string";
console.log(test)

//function return
let x = myFunc(4, 3);
// myFunc is called with two parameters, the return value will end up in x

function myFunc(a, b) {
  return a + b;
// myFunc returns the sum of a and b
}
console.log(x);
//Will give an output of 12.

//

function add(a,b) {
    return a+b;
}
add(10,12);
// Will give out of 22

add
// Will return function add (a,b){return a+b;}

// functions as variable values

function add(a,b) {
    return a+b;
}
let myStr = "The sum of 10 + 12 is " + add(10,12);
console.log(myStr);
//Output is "The sum of 10 + 12 is 22"

// function expressions
let welcome = function(){
    alert("Hello");
};

sayHi("John"); // Hello, John
function sayHi(name) {
  alert( `Hello, ${name}` );
}

//arrow functions 

hello = () => {
    return "Hello World!";
}

hello = () => "Hello World!"; // when only one statement you dont need a return statement

hello = (name) => "Hello " + name; // you can parse the parameter 

hello = (name, age) => "Hello " + name +"! you are "+ age +" years old!"; // passing multiple parameters

hello = name => "Hello " + name; //with one parameter you can skip using ()

// Functions //
// Standard Functionadd(50, 25)
function add(a,b) {
}
// Function Expression
let greeting = function() {
  console.log("Hello everyone!");
}
// Arrow functionlet addup = (in1, in2) => in1 + in2;
console.log(addup(1234, 1237123)); 
const func = () => { "Something" };

