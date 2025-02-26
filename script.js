const containers = document.querySelector(".container");
let hovering = true;
let random = false;
let opacity = false;
var darkness = 0;
let erase = false;
const features = document.createElement("div");
features.classList.add("features");
containers.appendChild(features);

//drawing pad
const drawingPad = document.createElement("div");
drawingPad.classList.add("pad");
containers.appendChild(drawingPad);
drawingPad.style.width = "600px";
drawingPad.style.height = "600px";
drawingPad.style.padding = "12px";
drawingPad.style.border = "thin solid black";
drawingPad.style.borderRadius = "10px"
drawingPad.style.backgroundColor = "lightgrey"
drawingPad.style.display = "flex";
drawingPad.style.flexDirection = "column";


//setNewSize
const gridSizes = document.createElement("div");
let size = 16; 
gridSizes.textContent = "Grid size: " + size;
const iptSize = document.createElement("input");
iptSize.setAttribute("placeholder", "Please input 1-100")
features.appendChild(gridSizes);
features.appendChild(iptSize);
iptSize.addEventListener("change", () => {
    size = iptSize.value;
    if (size <= 100){
        removeGrid();
        newGrid(size);
    } else {
        alert("Sorry we only allow up to 100");
    }
    gridSizes.textContent = "Grid size: " + size;
})

//color change
const colors = document.createElement("input");
colors.type = 'color';
colors.setAttribute("value", "black");
var userColor = colors.value;
features.appendChild(colors);
colors.addEventListener("change", () =>{
    userColor = colors.value;
    random = false;
    erase = false;
    opacity = false;
})
const randomColor = document.createElement("button");
randomColor.textContent = "Random color";
features.appendChild(randomColor);
randomColor.addEventListener("click", () => {
    random =!random;
    erase = false;
})
const gradient = document.createElement("button");
gradient.textContent = "Gradient";
features.appendChild(gradient);
gradient.addEventListener("click", () => {
    opacity =!opacity;
    erase = false;
})

//eraser
const eraser = document.createElement("button");
eraser.textContent = "Eraser";
features.appendChild(eraser);
eraser.addEventListener("click", () => {
    erase =!erase;
})

//reset
const reset = document.createElement("button");
reset.textContent = "Reset";
features.appendChild(reset);
reset.addEventListener("click", () => {
    resetPixels();
})

//pause
const pause = document.createElement("button");
pause.textContent = "Pause";
features.appendChild(pause);
pause.addEventListener("click", () => {
    hovering =!hovering;
    if (hovering){
        pause.textContent = "Pause";
    } else{
        pause.textContent = "Continue";
    }
})

// coloring grid
newGrid(size);

function newGrid(size){
    for (i = size; i > 0; i--){
        newRow();
    }

    function newRow() {
        const row = document.createElement("div");
        drawingPad.appendChild(row); 
        row.classList.add("row");
        row.style.display = "flex";
        row.style.flex = "1 1 0";
        row.style.alignItems = "stretch";
        drawingPad.style.alignSelf = "stretch";
        for (j = size; j > 0; j--){
            newPixel(row);
        }
    }
    
    function newPixel(n) {
        const pixel = document.createElement("div");
        pixel.style.alignItems = "stretch";
        pixel.style.backgroundColor = "white";
        pixel.style.flex = "1 1 0";
        pixel.style.border = "0.0000001px solid grey";
        pixel.classList.add("px");
        n.appendChild(pixel); 
    }

    const pixels = document.querySelectorAll(".px");
    pixels.forEach((pixels) => pixels.addEventListener("mouseover", () => {
        if (hovering){
            if (erase){
                opacity = false;
                random = false;
                userColor = "white";
                pixels.style.opacity = 1;
                darkness = 0;
            } else
            if (random){
                userColor = randomizeColor();   
            }
            if (opacity){
                if(darkness == 100){
                    darkness = 0;
                }
                darkness += 10;
                pixels.style.opacity = darkness/100; 
            } else {
                pixels.style.opacity = 1;
            }
            pixels.style.backgroundColor = userColor;    
        }
    }))
}

function randomizeColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    } 
    return color;
}


function removeGrid(){
    const grid = document.querySelectorAll(".row");
    grid.forEach(grid => {
        grid.remove();
    })
}

function resetPixels() {
    const pixels = document.querySelectorAll(".px");
    pixels.forEach((pixels) => {
        pixels.style.opacity = 1;
        pixels.style.backgroundColor = "white";
    }
)}