


let choose = document.querySelector("#choice");
let gameGrid = document.querySelector("#gameGrid");
let defaultColor = document.querySelector("#default"); 
let randomColor = document.querySelector("#random");
let gridSize = 10;
let toggleRandom = false;


workDone();




//choice event listener
choice.addEventListener('click', (e) => {
   toggleRandom='false';
   gridSize = prompt("Enter grid size - Make sure grid size value should be in range 1 - 20");
   removeElements();
   workDone();
});


//default event listener
defaultColor.addEventListener('click', (e) => {
    toggleRandom = 'false';
   gridSize = 15;
   removeElements();
   workDone();
});

//random event listener
randomColor.addEventListener('click', (e) => {
    removeElements();
   toggleRandom = true;
   workDone();
});







//random color function
function getRandomColor(){
    let letter = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i<6; i++){
        color += letter[Math.floor(Math.random()*16)];
    }
    return color;
}







//generate grid with color
function gridGenerate() {
    let gameGridObject = document.createElement('div');
    gameGridObject.style.height = gameGrid.clientHeight/gridSize + "px";
    gameGridObject.style.width = gameGrid.clientWidth/gridSize + "px";
    gameGridObject.style.background = "white"
    gameGridObject.addEventListener('mouseover', (e) =>{
        gameGridObject.style.background = toggleRandom == true ? getRandomColor(): "black";
    });
    gameGridObject.classList.add('gridDivss');
    gameGrid.appendChild(gameGridObject);
}

function workDone () {
    for(let i = 0; i < gridSize * gridSize; i++){
        gridGenerate();
    }
}


//remove elements on every new click

function removeElements(){
    let removeEl = document.getElementsByClassName("gridDivss");
    while(removeEl[0]){
        removeEl[0].parentNode.removeChild(removeEl[0]);
    }
}



