let con = document.querySelector(".container");
let cellNumber = window.prompt("Number of Squares");


for (let i = 0; i < cellNumber; i++) {
    let cell = document.createElement("div");
    console.log(i);
    cell.innerText = "CELL";
    con.appendChild(cell); 
};