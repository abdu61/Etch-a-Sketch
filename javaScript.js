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
        // Remove 'active' class from all buttons
        document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked button
        buttonColor.classList.add('active');
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
['Black', 'Gray', 'Color'].forEach(chooseColor);
clearGrid();
addResizeButton();



//Background animation
// Function to create a span with random properties
function createSpan() {
    const span = document.createElement('span');
    const size = Math.random() * 15;

    span.style.width = size + 'px';
    span.style.height = size + 'px';
    span.style.borderRadius = `80%`;
    span.style.top = Math.random() * innerHeight + "px";
    span.style.left = Math.random() * innerWidth + "px";
    span.style.transition = 'all 0.7s ease-out'; 
    span.style.background = 'white';

    return span;
}

// Main animation function
function backgroundAnimation() {
    const section = document.querySelector('body');
    const span = createSpan();

    section.appendChild(span);
    setTimeout(() => {span.remove()}, Math.random() * 4000 + 3000);
}

setInterval(backgroundAnimation, 150);