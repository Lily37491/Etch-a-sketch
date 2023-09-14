const parentContainer = document.querySelector("#container");
let userInput = prompt("Enter a Grid Size between 1 and 100", "67");
let gridSize = parseInt(userInput);
parentContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
parentContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

do {
    userInput = prompt("Enter a Grid Size between 1 and 100", "67");
    gridSize = parseInt(userInput);

    if (gridSize > 100 || isNaN(gridSize) || gridSize < 1) {
        alert("Please enter a valid grid size between 1 and 100.");
    }
} while (gridSize > 100 || isNaN(gridSize) || gridSize < 1);


for (let i = 0; i < gridSize * gridSize; i++){
    const divs = document.createElement('div');
    divs.classList.add("childDiv");
    parentContainer.appendChild(divs);

    divs.addEventListener('mouseover', () => {
        divs.style.background = "black";
    })
 
}
