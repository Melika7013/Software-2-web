'use strict';

let n = +prompt("Enter an integer:");
let prime = n > 1;

for (let i = 2; i <= Math.sqrt(n) && prime; i++)
    if (n % i === 0) prime = false;

document.querySelector("#target").innerHTML = `${n} is ${prime ? "a prime number" : "not a prime number"}.`;
