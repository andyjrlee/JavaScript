let strictA = true;
let strictB = 1;

console.log(strictA == strictB); // true
console.log(strictA === strictB); // false

console.log(strictA != strictB); // false
console.log(strictA !== strictB); // true

let age = 38

if(age >=18 && age <=65) {
    console.log("Age is within 16 and 65");
} else if (age <18 ){
    console.log("Sorry you are under age ");
} else {
    console.log("Sorry you are too old!")
}

let result = age >=50 ? "You are over 50" : "You are under 50";
console.log(result);

let setCookie = (nameOfCookie, cookievalue, exdays) => {
    let date = new Date();
    date.setTime(date.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ date.toUTCString();
    document.cookie = nameOfCookie + "=" +"name:" + cookievalue + ";" + expires + ";path=/";
  }
  
  //We call it as so
  setCookie("myYummyCookie","Donald Tramp", "2");

  let makeCookie = (cookieName, username, email, exdays) => {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + "Username: " + username +" & "+ "Email: " + email + ";" + expires + ";path=/";
    }
   
    makeCookie("myCookie", "vg", "vg@somemail.com", 2);