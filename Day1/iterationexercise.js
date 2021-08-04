// my solition - Exercise 1

for (let a = 100; a < 200; a++) {
    console.log(`a = ${a}`);
}

//community solution
let b = 100;
while (b <= 200) {
    b++;
    console.log(`b = ${b}`)
}

// my solution - Exercise 2
let c = 100;
while (c <= 200) {
  if (c % 2 == 0) {
    console.log("-");
  } else {
    console.log("*");
  }
  c++;
}

// Exercise 3 - my solution
for (let i = 0; i < 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(j);
    }
 }  

 // Exercise 4 - my solution
 for (let d = 100; d <= 200; d++) {
    if (d % 2 == 0) {
      console.log("-");
    } else {
      console.log("*");
    }
  }

  //Exercise 5 - my solution
//   let day = Monday;

//   switch(day){
//       case Monday:
//           console.log("It's Monday");
//         case Tuesday:
//         console.log("It's Tuesday");
//         case Wednesday:
//             console.log("It's Wednesday");
//         case Thursday:
//             console.log("It's Thursday");
//         case Friday:
//             console.log("It's Friday");
//         case Saturday:
//             console.log("It's Saturday");
//             break
//         case Sunday:
//             console.log("It's Sunday");
//             break
//             default:
//                 console.log("No Such Day Exists")

//   }

  // Exercise 5 - community solution
  let now = new Date(); 
let day = now.getDay();
switch (day) {
  case 0:
    console.log(`It's Sunday`);
    break;
  case 6:
    console.log(`It's Saturday`);
    break;
  case 1:
    console.log(`It's Monday`);
  case 2:
  case 3:
  case 4:
  case 5:
    console.log(`It's a weekday`);
    break;
  default:
    console.log(`Excuse me?`);
    break;
}

