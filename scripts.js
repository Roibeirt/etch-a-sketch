const sketchContainer = document.querySelector("#sketch-container");

let sketchDivs = new Array();
let gridSize = 100;

for (i=0; i<gridSize; i++){

    sketchDivs[i] = document.createElement('div');
    sketchContainer.appendChild(sketchDivs[i]);
    sketchDivs[i].style.width = (100/(Math.sqrt(gridSize)))+'%';
    sketchDivs[i].style.display = 'flex';
    sketchDivs[i].style.flex = 'auto';
    sketchDivs[i].addEventListener('mouseenter', () => {event.target.style.backgroundColor='red'});
}


