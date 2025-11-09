'use strict';

let sum = 0;
for (let i = 0; i < +prompt("Enter the number of dice rolls:"); i++)
    sum += Math.floor(Math.random() * 6) + 1;

document.querySelector("#target").innerHTML = `The sum of the dice rolls is ${sum}.`;
