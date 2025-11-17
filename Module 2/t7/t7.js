function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

let sides = parseInt(prompt("Enter the number of sides on the dice:"));
while (isNaN(sides) || sides < 1) {
    sides = parseInt(prompt("Please enter a valid number of sides:"));
}

let maxNumber = parseInt(prompt("Enter the maximum number to roll:"));
while (isNaN(maxNumber) || maxNumber < 1 || maxNumber > sides) {
    maxNumber = parseInt(prompt(`Please enter a valid maximum number (1 to ${sides}):`));
}

let roll;
let targetDiv = document.getElementById("target");
targetDiv.innerHTML = `<p>Rolling a ${sides}-sided dice until we get ${maxNumber}...</p>`;

do {
    roll = rollDice(sides);
    targetDiv.innerHTML += `<p>Rolled: ${roll}</p>`;
} while (roll !== maxNumber);

targetDiv.innerHTML += `<p>Maximum number rolled! Program stops.</p>`;
