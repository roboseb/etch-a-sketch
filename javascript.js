const container = document.querySelector("#container");
const box = document.querySelector("#title");
const resetButton = document.querySelector('#resetbtn');
const gridButton = document.querySelector('#gridbtn');

let sideWidth = 20;
let containerWidth = 500;
container.style.width = `${containerWidth}px`;
container.style.height = `${containerWidth}px`;

//Create a single box and append it to the container
function makeBox(width) {
    const div = document.createElement("div");
    div.classList.add('box');
    div.addEventListener('mouseover', () => {
        div.classList.add('hovered-box');
    });
    div.style.width = `${(containerWidth+5)/width-5}px`;
    div.style.height = `${(containerWidth+5)/width-5}px`;     
    container.appendChild(div);
}

//clear all hovered boxes
function reset() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.classList.remove('hovered-box'));
}

//make a variable size grid with the same width and height
function makeGrid(width) {
    const boxes = document.querySelectorAll('.box');
    let colSize = container.style.gridTemplateColumns;
    let rowSize = container.style.gridTemplateRows;
    boxes.forEach(box => {
        container.removeChild(box);
    });
    colSize = "";
    rowSize = "";

    //set grid dimensions to user input
    for (let i = 0; i < width; i++) {
        colSize += `${(containerWidth+5)/width-5}px `;
        container.style.gridTemplateColumns = colSize;

        rowSize += `${(containerWidth+5)/width-5}px `;
        container.style.gridTemplateRows = rowSize;
    }
    
    for (let i = 0; i < width * width; i++) {
        makeBox(width);
    }
}

function gridPrompt() {
    let width = prompt("What width would you like?");
    while (typeof(width) != "number") {
        width = prompt("Please enter an integer.");
    }

    while (width > 100) {
        width = prompt("Please choose a number between 1 and 100.");
    }

    return width;

}

makeGrid(4);

resetButton.addEventListener('click', reset)
gridButton.addEventListener('click', function(){makeGrid(gridPrompt())})



box.addEventListener('click', makeBox);


