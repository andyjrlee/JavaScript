"use strict"

// exercise 1 - my solution

const increase = (num1) =>  {
  alert(`The updated value is: ${num1+13}`);
  }

  const input = (number) =>  {
    let value = parseInt(prompt('Please enter a number.'));
    number(value);
  }
  input(increase);