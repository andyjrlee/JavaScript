"use strict";

// function scope 

function someFunction() {
    let hello = "Billy Bob Joe";
  }
  someFunction();
  console.log(hello); // ReferenceError: hello is not defined

  // global scope 

  let check = false;

function changeCheck() {
  check = true;
}
changeCheck();
console.log(check); // True

// automatically global

function someFunction() {
    hello = "Billy Bob Joe";
  }
  someFunction();
  console.log(hello); // Billy Bob Joe
  hello = "Who is Billy?";
  console.log(hello); // Who is Billy?

  // example 1 - global variable

  function test() {
    flag = true;
    alert(flag);
    test1();
    alert(flag);
  }
  function test1() {
    flag = false;
    return;
  }

  // example 2 - local variable

  function test() {
    flag = true;
    alert(flag);
    test1();
    alert(flag);
  }
  function test1() {
    let flag = false;
    return;
  }