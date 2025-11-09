'use strict';

if (confirm("Should I calculate the square root?")) {
    let num = +prompt("Enter a number:");
    if (num < 0) {
        document.querySelector("#target").innerHTML = "The square root of a negative number is not defined.";
    } else {
        document.querySelector("#target").innerHTML = `The square root of ${num} is ${Math.sqrt(num)}.`;
    }
} else {
    document.querySelector("#target").innerHTML = "The square root is not calculated.";
}
