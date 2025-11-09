'use strict';

let startYear = +prompt("Enter the start year:");
let endYear = +prompt("Enter the end year:");

let html = "<ul>";
for (let year = startYear; year <= endYear; year++)
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))
        html += `<li>${year}</li>`;
html += "</ul>";

document.querySelector("#target").innerHTML = html;
