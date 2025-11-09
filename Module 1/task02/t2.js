'use strict';

const name = prompt("please enter your name")

const greeting = `Hello, ${name}!!!!`

//console.log(greeting);

document.querySelector("#target").innerHTML= greeting;