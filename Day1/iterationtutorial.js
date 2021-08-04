'use strict';

// for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
  }

//while loop
let puppies = 0;
let notEnoughPups = true;

while (notEnoughPups) {
  console.log("Another pup");
  puppies++;

  if (puppies > 238) {
    notEnoughPups = false;
  }
}
console.log("Oh so many puppies!");

//do while loop
let x = 0;
let canIRun = false;
do {
  x++;
  console.log(x);
} while (canIRun);

//Switch Case

let num = 5;
switch (num) {
  case 4:
    console.log(`Value is 4`);
    break;
  case 5:
    console.log(`Value is 5`);
    break;
  case 6:
    console.log(`Well...`);
  case 7:
  case 8:
  case 9:
  case 10:
    console.log(`Value is greater than 5`);
    break;
  default:
    console.log(`Sorry can't find the range you're looking for...`);
}