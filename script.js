
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

let gridDiv = createGrid();
createDiv(gridDiv);

// Grid divs change color when the mouse passes over them
contentDiv.addEventListener("mouseover", (event) => event.target.style.backgroundColor = "black");

button.addEventListener("click", () => {
    const userInput = prompt("How many squares per side?");
    contentDiv.innerHTML = '';
    gridDiv = createGrid(userInput);
    createDiv(gridDiv, userInput);
});
