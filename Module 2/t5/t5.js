let numbers = [];

while (true) {
    let input = prompt("Enter a number:");
    let num = parseFloat(input);

    if (numbers.includes(num)) {
        alert("This number has already been given! Stopping.");
        break;
    }

    if (!isNaN(num)) {
        numbers.push(num);
    } else {
        alert("Please enter a valid number!");
    }
}

numbers.sort((a, b) => a - b);

console.log("Numbers in ascending order:");
for (let number of numbers) {
    console.log(number);
}
