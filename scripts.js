//set constants

const sketchContainer = document.querySelector("#sketch-container");
const setSizeButton = document.querySelector("#setSizeButton");
const colorInput = document.querySelector("#colorPicker");
const rainbowButton = document.querySelector('#randomColor');
const shadeButton = document.querySelector("#shaderButton")

//add event listeners for buttons

setSizeButton.addEventListener('click', changeGridSize);
shadeButton.addEventListener('click', shaderPrep);
rainbowButton.addEventListener('click', rainbowPrep);
colorInput.addEventListener('change', () => {

    for (i=0; i<sketchDivs.length; i++){

        sketchDivs[i].addEventListener('mouseenter', changeColor);
    }

} );

//create array to hold grid div elements and create initial grid

let sketchDivs = new Array();
let gridSize = 16;
setGrid(gridSize);


//functions for creating and clearing grid, and changing grid size based on user input

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
        gridSize = userInput;

    }
    else{

        changeGridSize();

    }

}

//function to change div colour to colour picker value

function changeColor(){

    let currentElement = this;
    currentElement.style.backgroundColor=colorInput.value;

}

//shading functions

let shade = 255; //set rgb colour value to start as white

function shaderPrep(){
    for (i=0; i<sketchDivs.length; i++){
    sketchDivs[i].removeEventListener('mouseenter', changeColor);
    sketchDivs[i].removeEventListener('mouseenter', rainbow);
    sketchDivs[i].addEventListener('mouseenter', shader);
    }
    shade = 255;
}

function shader(){

    let currentElement = this;
    currentElement.style.backgroundColor= 'rgb(' + shade + ',' + shade + ',' + shade + ')';
    shade -= (shade/gridSize);
}

//random colour functions

function rainbowPrep(){

    for (i=0; i<sketchDivs.length; i++){
        sketchDivs[i].removeEventListener('mouseenter', changeColor);
        sketchDivs[i].removeEventListener('mouseenter', shader);
        sketchDivs[i].addEventListener('mouseenter', rainbow);
        }
}

function rainbow(){

    let currentElement = this;
    currentElement.style.backgroundColor= 'rgb(' + (Math.random() * 256) + ',' + (Math.random() * 256) + ',' + (Math.random() * 256) + ')';

}



