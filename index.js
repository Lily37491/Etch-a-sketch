const parentContainer = document.querySelector("#container");
let gridSize = 16;

for (let i = 0; i < gridSize * gridSize; i++){
    const divs = document.createElement('div');
    divs.classList.add("childDiv");
    parentContainer.appendChild(divs);
}


