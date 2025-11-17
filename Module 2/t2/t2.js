let count = parseInt(prompt("Enter the number of participants:"));

let names = [];

for (let i = 0; i < count; i++) {
    let name = prompt(`Enter the name of participant ${i + 1}:`);
    names.push(name);
}

names.sort();

let ol = document.createElement("ol");
for (let name of names) {
    let li = document.createElement("li");
    li.textContent = name;
    ol.appendChild(li);
}

document.getElementById("target").appendChild(ol);
