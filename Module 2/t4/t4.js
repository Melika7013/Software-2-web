let numbers = [];

while (true) {
    let input = prompt("Enter a number (0 to stop):");
    let num = parseFloat(input);

    if (num === 0) {
        break;
    }

    if (!isNaN(num)) {
        numbers.push(num);
    } else {
        alert("Please enter a valid number!");
    }
}

numbers.sort((a, b) => b - a);

let result = document.createElement("p");
result.textContent = "Numbers from largest to smallest: " + numbers.join(", ");

document.getElementById("target").appendChild(result);
