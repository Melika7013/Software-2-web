let numCandidates = parseInt(prompt("Enter the number of candidates:"));
while (isNaN(numCandidates) || numCandidates < 1) {
    numCandidates = parseInt(prompt("Please enter a valid number of candidates:"));
}

let candidates = [];
for (let i = 0; i < numCandidates; i++) {
    let name = "";
    while (!name) {
        name = prompt("Name for candidate " + (i + 1) + ":").trim();
    }
    candidates.push({ name: name, votes: 0 });
}

let numVoters = parseInt(prompt("Enter the number of voters:"));
while (isNaN(numVoters) || numVoters < 1) {
    numVoters = parseInt(prompt("Please enter a valid number of voters:"));
}

for (let i = 0; i < numVoters; i++) {
    let vote = prompt("Voter " + (i + 1) + ", enter candidate name:").trim();
    if (vote === "") continue;

    let found = false;
    for (let j = 0; j < candidates.length; j++) {
        if (candidates[j].name.toLowerCase() === vote.toLowerCase()) {
            candidates[j].votes += 1;
            found = true;
            break;
        }
    }
}

if (candidates.length > 0) {
    candidates.sort((a, b) => b.votes - a.votes);
    let winner = candidates[0];
    console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
    console.log("Results:");
    for (let i = 0; i < candidates.length; i++) {
        console.log(`${candidates[i].name}: ${candidates[i].votes} votes`);
    }
} else {
    console.log("No candidates available.");
}
