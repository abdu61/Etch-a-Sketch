const grid = document.querySelector('.grid');
const button = document.querySelector('.buttons');

function createGrid(rows, cols) {
    for (let i=0; i < (rows * cols); i++) {
        const box = document.createElement('div');
        box.style.border = '1px solid black';
        grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        grid.appendChild(box).classList.add('box');
    }
}

createGrid(16,16);


function chooseColor(color) {
    const boxes = document.querySelectorAll('.box');
    const buttonColor = document.createElement('button');
    buttonColor.textContent = color ;
    buttonColor.addEventListener('click', () =>{
        boxes.forEach(box => box.addEventListener('mouseover',() =>{
        if(color === 'Gray')
            {
            // rGG = randomGrayGenerator
            let rGG = Math.floor(Math.random()*256);
            let grayColor = `rgb(${rGG},${rGG},${rGG})`;
            box.style.background = grayColor;
            }
        else if(color === 'Color')
            {
                function getRandomHexColor() {
                    let randomColor = Math.floor(Math.random()*16777215).toString(16);
                    return "#" + randomColor.padStart(6, "0");
                }
            box.style.background = getRandomHexColor();
            }
        else
            { 
            box.style.background = 'black';
            }
    }))
    })
    button.appendChild(buttonColor).classList.add('btn');
}

chooseColor('Color');
chooseColor('Gray');
chooseColor('Black');