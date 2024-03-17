
const contentDiv = document.querySelector(".content");
const button = document.querySelector("button");

console.log(contentDiv);
function createGrid(size = 16) {
    /** 
     * The function will create a 16X16 grid
     * @param {none} -
     * @returns {array} - A 2D array
    */
    const grid = new Array(size);
    for (let i = 0; i <size; i++) {
        grid[i] = new Array(size);
    }
    return grid;
}

function createDiv(grid, size = 16) {
    /** 
     * The function will fill the array with div elements
     * There are two types of div, the row one which will contain 16 divs each
     * and the individual div
     * @param {array} grid- A 16x16 array
     * @returns {none} - 
    */
    // Get the width of each grid relative to the content div
    gridWidth = 256 / size;
    borderWidth = 1;
    divWidth = gridWidth - borderWidth;
    for (let i = 0; i <size; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.id = `row${i}`;
        rowDiv.style.display = 'flex';
        contentDiv.appendChild(rowDiv);
        for (let j = 0; j <size; j++) {
            grid[i][j] = document.createElement("div");
            grid[i][j].style.padding = `${gridWidth - borderWidth}px`;
            grid[i][j].style.margin = '0px';
            grid[i][j].style.backgroundColor = 'white';
            grid[i][j].style.border = `${borderWidth}px solid`;
            rowDiv.appendChild(grid[i][j]);
        }
    }
}

function randomColor() {
    /** 
     * Create a random RGBA color
     * @returns {string} color - a string with the following format rgb(R,G,B,A) values
    */
    const arrayColor = [Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255)];

    return `rgba(${arrayColor[0]},${arrayColor[1]},${arrayColor[2]},.1)`;
}

let gridDiv = createGrid();
createDiv(gridDiv);

// Grid divs change color when the mouse passes over them
contentDiv.addEventListener("mouseover", (event) => {
    /** 
     * if color is default aka white then creates a random RGB color,
     * if not then increase alpha for RGBA color by 0.1 
    */
    let color = event.target.style.backgroundColor;
    if (color === "white") {
        event.target.style.backgroundColor = randomColor();
    }
    else {
        let alphaColor = parseFloat(color.slice(-3,-1));
        let alphaIncrease = alphaColor >= 0.9 ? 0.0: 0.1;
        alphaColor += alphaIncrease;
        let newColor = color.slice(0,-3) + alphaColor + ')';
        event.target.style.backgroundColor = newColor;
    }
});

button.addEventListener("click", () => {
    // Allows the user to edit the grid size
    const promptInput = prompt("How many squares per side?");
    // If prompt inpuy is empy or > 100 then default to 16
    let userInput = promptInput ? promptInput : 16;
    userInput = userInput < 100 ? userInput : 16;

    contentDiv.innerHTML = '';
    gridDiv = createGrid(userInput);
    createDiv(gridDiv, userInput);
});
