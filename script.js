let con = document.querySelector(".container");
let size = window.prompt('How many cells per side?');

if (size > 50) {
    alert("Max Size 50 cells")
    size = window.prompt("How many cells per side?")
};


size = size * 20

con.style.height = `${size}px`;
con.style.width = `${size}px`;


let cellNumber = Math.pow(Math.floor(size/20),2);




for (let i = 0; i < cellNumber; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    con.appendChild(cell); 
    con.classList.add("container2");
};