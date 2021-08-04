"use strict"

const greeting = (val) =>  {

    // Creates an alert(pop-up box) which says hello and appends the value of the variable `name`
    alert(`The updated value is: ${val+10}`);
  }
  
  const processUserInput = (callback) =>  {
  
    // A simple user input box appears on the browser that take a value and assigns it to `name`
    let val = parseInt(prompt('Please enter a number.'));
  
    // Then pass the variable `name` to the callback function as parameter
    callback(val);
  }
  //Call the function `processUserInput()` and then pass `greeting` as a parameter.
  processUserInput(greeting);