"use strict";

console.log("Hello world!");

// Promise 

  //we create a new promise
  let newProm = new Promise((resolve,reject)=>{
    let a = 1+0;
    if (a==2){
        //we say what happens in the success outcome
        resolve("Success");
    }else{
        //we say what happens in the reject outcome
        reject("Failed");
    }
})

//we then pass the value from resolve or reject and we set it to message.
//.then() is executed if Fulfilled/successful.
newProm.then((message)=>{
    console.log(`This is in the then block and the status is: ${message}`);
    //.catch() is executed if rejected/failed.
}).catch((message)=>{
    console.log(`This is in the catch block and the status is: ${message}`);
//.then can be chained and will execute regardless of the outcome.
}).then(()=>{
    console.log("I will take place regardless of what happened before.");
})

// callbacks 

const greeting = (name) =>  {

    // Creates an alert(pop-up box) which says hello and appends the value of the variable `name`
    alert(`Hello ${name}`);
  }
  
  const processUserInput = (callback) =>  {
  
    // A simple user input box appears on the browser that take a value and assigns it to `name`
    let name = prompt('Please enter your name.');
  
    // Then pass the variable `name` to the callback function as parameter
    callback(name);
  }
  //Call the function `processUserInput()` and then pass `greeting` as a parameter.
  processUserInput(greeting);