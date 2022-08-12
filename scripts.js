const sketchContainer = document.querySelector("#sketch-container");
const setSizeButton = document.querySelector("#setSizeButton");
const colorInput = document.querySelector("#colorPicker");

let sketchDivs = new Array();
let gridSize = 16;
setGrid(gridSize);

setSizeButton.addEventListener('click', changeGridSize);

function setGrid(size){

for (i=0; i<size; i++){
    
    sketchDivs[i] = document.createElement('div');
    sketchContainer.appendChild(sketchDivs[i]);
    sketchDivs[i].style.width = (100/(Math.sqrt(size)))+'%';
    sketchDivs[i].style.display = 'flex';
    sketchDivs[i].style.flex = 'auto';
    sketchDivs[i].addEventListener('mouseenter', changeColor);
}

}

function clearGrid(){

    for(i=0; i<sketchDivs.length; i++){
        sketchDivs[i].remove();
    }
    sketchDivs=[];

}

function changeGridSize(){

    let userInput=Number(prompt('Enter integer <100.'));

    if(Number.isInteger(userInput)==true && userInput < 100){

        clearGrid();
        setGrid(userInput);

    }
    else{

        changeGridSize();

    }

}

function changeColor(){

    let currentElement = this;
    currentElement.style.backgroundColor=colorInput.value;

}



