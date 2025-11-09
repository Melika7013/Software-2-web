'use strict';

let name = prompt("Enter your name:");
let house = "";

switch (Math.floor(Math.random() * 4) + 1) {
    case 1: house = "Gryffindor"; break;
    case 2: house = "Slytherin"; break;
    case 3: house = "Hufflepuff"; break;
    default: house = "Ravenclaw";
}

document.querySelector("#target").innerHTML = `${name}, you are ${house}.`;
