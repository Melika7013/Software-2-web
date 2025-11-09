'use strict';

let dice = +prompt("How many dice?");
let sumTarget = +prompt("Which sum do you want?");
let success = 0;
let simulations = 10000;

for (let i = 0; i < simulations; i++) {
    let total = 0;
    for (let j = 0; j < dice; j++) {
        total += Math.floor(Math.random() * 6) + 1;
    }
    if (total === sumTarget) success++;
}

let prob = (success / simulations * 100).toFixed(2);
document.querySelector("#target").innerHTML =
    `Probability to get sum ${sumTarget} with ${dice} dice is ${prob}%`;
