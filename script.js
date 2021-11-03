const gridContainer = document.querySelector('#grid-container');
let gridWidth = 16;
let gridHeight = 16;

function changeColor(e) {
	e.target.style.backgroundColor = `rgb(1,1,1)`;
}

function drawGrid(gridWidth, gridHeight) {
  gridContainer.style.setProperty('--grid-rows', gridWidth);
  gridContainer.style.setProperty('--grid-cols', gridHeight);
  for (i = 0; i < gridHeight * gridWidth ; i++) {
	const div = document.createElement('div');
	div.setAttribute("id", `cellNumber${i + 1}`);
	div.addEventListener("mouseover", changeColor);
	gridContainer.appendChild(div).className = "cell"
  }
} 

function drawGridDefault() {
	drawGrid(gridWidth,gridHeight);
  }  

drawGridDefault();
