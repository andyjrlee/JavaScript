"use strict";

window.onload = function(){
    //create a couple of elements in an otherwise empty HTML page
    const heading = document.createElement("h1");
    const heading_text = document.createTextNode("Big head!");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);}

let firstDiv = document.querySelector('div');
firstDiv.style.color = '#004d99';

// let paras = document.querySelectorAll('p');
// for(let p of paras) {
//     p.style.colour = 'red';
// }

// let div = document.querySelector('div');
// let strong = document.createElement('strong');
// strong.textContent = " Hello friends";
// div.appendChild(strong);

// div.removeChild(strong);

let em = document.createElement('em');
let strong = document.querySelector('strong');
let div = document.querySelector('div');
em.textContent = "Replaced!"; 
div.replaceChild(em,strong);

 // run this function when the document is loaded


    let btn = document.querySelector('button');
btn.addEventListener('click',foo);

