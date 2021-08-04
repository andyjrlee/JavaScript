 "use strict";

 
 let makeCookie = (cookieName, username, email, age, exdays) => {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + "Username: " + username +" & "+ "Email: " + email +" & " + "Age: " + age + " ";" + expires + ";path=/";
    }
   
    makeCookie("yourCookie", "Andyjrlee", "andyjrlee@outlook.com", 38, 10);



