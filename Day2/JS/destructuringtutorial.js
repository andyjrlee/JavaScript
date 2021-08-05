'use strict';

console.log("Hello");

//Spread Operator
const myArray =  [1,2,3,4,5,6,7,8,9,];
const [a,b,...rest] = myArray;
console.log(a); //1
console.log(b); //2
console.log(rest); //3,4,5,6,7,8,9

//skipping values
const myArray =  [1,2,3,4,5,6,7,8,9,];
const [a,,c,...rest] = myArray;
console.log(a); //1
console.log(c); //3
console.log(rest); //,4,5,6,7,8,9

//objects
const person = {
    first: 'Chris',
    last: 'Perrins',
    country: 'UK',
    city: 'Manchester',
  };
  let {first, last} = person;
  console.log( `My name is ${first} ${last}`);
  //output: My name is Chris Perrins

  // default values for objects
  const person = {
    first: 'Chris',
    last: 'Perrins',
    country: 'UK',
    city: 'Manchester',
  };
  let {first, last,gender="Female"} = person;
  console.log( `My name is ${first} ${last} and I am a ${gender}!`);
  //output: "My name is Chris Perrins and I am a Female!"
  const person = {
    first: 'Chris',
    last: 'perrins',
    country: 'UK',
    city: 'Manchester',
    gender:'Male'
  };
  let { first,last, gender="Female" } = person;
  console.log( `my name is ${first} ${last} and i am a ${gender}!`);
  //output: "My name is Chris perrins and i am a Male!"

  // default values for arrays

const rgb = [200];
const [red = 255, green, blue = 255] = rgb;
console.log(`R: ${red}, G: ${green}, B: ${blue}`);
//output:  R: 200, G: undefined, B: 255

let red = 100;
let green = 200;
let blue = 50;
const rgb = [200, 255, 100];
[red, green] = rgb;
console.log(`R: ${red}, G: ${green}, B: ${blue}`);
//output: R: 200, G: 255, B: 50

// nest object destructuring

const student = {
    name: 'John Doe',
    age: 16,
    scores: {maths: 74,english: 63}
};
const { name, scores: {maths, science = 50} } = student;

console.log(`${name} scored ${maths} in Maths and ${science} in Science.`);
//output: John Doe scored 74 in Maths and 50 in Science.

//nester array destructuring
const color = ['#FF00FF', [255, 0, 255], 'rgb(255, 0, 255)'];
// Use nested destructuring to assign red, green and blue
const [hex, [red, green, blue]] = color;
console.log(hex, red, green, blue);
//output: #FF00FF 255 0 255

// swapping values

let width = 300;
let height = 400;
const landscape = true;

console.log(`${width} x ${height}`);
//output:300 x 400

if (landscape) {
    // An extra variable is needed to copy initial width to
    let initialWidth = width;
    // Swap the variables
    width = height;
    // height is assigned the copied width value
    height = initialWidth;
    console.log(`${width} x ${height}`);
    //output 400 x 300
}

// above but with single statement

let width = 300;
let height = 400;
const landscape = true;

console.log(`${width} x ${height}`);
//output :300 x 400
if (landscape) {
    // Swap the variables
    [width, height] = [height, width];
    console.log(`${width} x ${height}`);
    //output: 400 x 300
}

//using different variable names 

const person = {
    name: 'Isaac Mewton',
    country: 'UK'
};
// Assign default value of 25 to years if age key is undefined
const { name: fullname, country: place, age: years = 25 } = person;

// Here I am using ES6 template literals
console.log(`I am ${fullname} from ${place} and I am ${years} years old.`);
//output: I am Isaac Mewton from UK and I am 25 years old.'



