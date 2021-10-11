let con = document.querySelector(".container");
let size = window.prompt('How many cells per side?');
let cellNumber = 0

while (size>50) {
    if (size > 50) {
        alert("Max Size 50 cells")
        size = window.prompt("How many cells per side?")
    };
};


size = size * 20;


//Create the board size
function setSize(con,size) {
    con.style.height = `${size}px`;
    con.style.width = `${size}px`;
};


//Calculate number of cells
function calcCells(size) {
    cellNumber = Math.pow(Math.floor(size/20),2);
};

setSize(con,size);
calcCells(size);

//Function to create the "cell" Divs
function createGrid(cellNumber) {

    for (let i = 0; i < cellNumber; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        con.appendChild(cell); 
        con.classList.add("container2");
    };

};

//Create the board of grids
createGrid(cellNumber);



//Select all the cells
let cells = document.querySelectorAll(".cell");


function addEvents (cells) {
    cells.forEach((element) => {

        element.addEventListener('mouseover', (e) => {


            if (e.buttons == 1) {
                element.style.backgroundColor = "grey";
            }
        });
    });
};

addEvents(cells);

let reset = document.querySelector(".reset");

reset.addEventListener('click', () => {

    cells = document.querySelectorAll(".cell");

    cells.forEach((element) => {
        element.remove();
    });

    con.classList.remove("container2");
    size = window.prompt('How many cells per side?');

    while (size>50) {
        if (size > 50) {
            alert("Max Size 50 cells")
            size = window.prompt("How many cells per side?")
        };
    };

    size *= 20

    setSize(con,size);
    calcCells(size);
    createGrid(cellNumber);
    cells = document.querySelectorAll(".cell");
    addEvents(cells);
});