'use strict';

let year = +prompt("Enter a year:");

document.querySelector("#target").innerHTML =
    `${year} is ${ (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? "a leap year" : "not a leap year"}.`;
