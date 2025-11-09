'use strict';

let a = +prompt("Enter first integer:");
let b = +prompt("Enter second integer:");
let c = +prompt("Enter third integer:");

document.querySelector("#target").innerHTML = `
Sum: ${a + b + c} <br>
Product: ${a * b * c} <br>
Average: ${(a + b + c) / 3}
`;
