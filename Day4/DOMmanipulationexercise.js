// "use strict";

let div = document.querySelector('.main');

const header = document.createElement('h1');
const button = document.createElement('button');
const event = new Date( );

div.appendChild(header);
div.appendChild(button);

header.innerText = 'Welcome to my website!';
button.innerText = "Click Here to visit BBC Sport";

header.setAttribute('class', 'mainHeader');

onload = function(){
    const body = document.body;
    const heading = document.createElement("h1");
    const today = event.toDateString();
    body.append(heading);
    heading.innerText = "Today is : " + today;
};

button.addEventListener("click", function(){
    window.open("https://www.bbc.co.uk/sport");
});





