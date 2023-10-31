const grid = document.querySelector('.grid');
const button = document.querySelector('.buttons');

function createGrid(size) {
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        
        grid.appendChild(box);
    }
}

function chooseColor(color) {
    const buttonColor = document.createElement('button');
    buttonColor.textContent = color;
    buttonColor.classList.add('btn');
    buttonColor.addEventListener('click', () => {
        grid.onmousedown = grid.onmousemove = e => {
            if (e.buttons === 1) {
                changeColor(e.target, color);
            }
        };
    });
    button.appendChild(buttonColor);
    if (color === 'Black') {
        buttonColor.click();
    }
}

function changeColor(box, color) {
    if (box.className.includes('box')) {
        box.style.background = color === 'Gray' ? getRandomGrayColor() : color === 'Color' ? getRandomHexColor() : 'black';
    }
}

function getRandomGrayColor() {
    let rGG = Math.floor(Math.random() * 256);
    return `rgb(${rGG},${rGG},${rGG})`;
}

function getRandomHexColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor.padStart(6, "0");
}

function clearGrid() {
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear';
    clearButton.classList.add('btn');
    clearButton.addEventListener('click', () => {
        document.querySelectorAll('.box').forEach(box => {
            box.style.background = 'transparent';
        });
    });
    button.appendChild(clearButton);
}

function resizeGrid() {
    const newSize = parseInt(prompt("Enter new grid size"));
    if (!isNaN(newSize) && newSize > 0) {
        createGrid(newSize);
    } else {
        alert("Invalid size. Please enter a positive number.");
    }
}

function addResizeButton() {
    const resizeButton = document.createElement('button');
    resizeButton.textContent = 'Resize';
    resizeButton.classList.add('btn');
    resizeButton.addEventListener('click', resizeGrid);
    button.appendChild(resizeButton);
}

createGrid(16);
['Color', 'Gray', 'Black'].forEach(chooseColor);
clearGrid();
addResizeButton();