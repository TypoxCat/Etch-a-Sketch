const containers = document.querySelector(".container");
let hovering = true;
const features = document.createElement("div");
containers.appendChild(features);

//drawing pad
const drawingPad = document.createElement("div");
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
let sizes = 16; 
gridSizes.textContent = "Grid size: " + sizes;
const iptSize = document.createElement("input");
features.appendChild(gridSizes);
features.appendChild(iptSize);
iptSize.addEventListener("change", () => {
    sizes = iptSize.value;
    if (sizes <= 100){
        removeGrid();
        newGrid(sizes);
    } else {
        alert("Sorry we only allow up to 100");
    }
    gridSizes.textContent = "Grid size:" + sizes;
})

//reset
const reset = document.createElement("button");
reset.textContent = "Reset";
features.appendChild(reset);
reset.addEventListener("click", () => {
    resetPixels();
})
 
//color change
const colors = document.createElement("input");
colors.type = 'color';
colors.setAttribute("value", "black");
var userColor = colors.value;
features.appendChild(colors);
colors.addEventListener("change", () =>{
    userColor = colors.value;
})

//pause
const pause = document.createElement("button");
pause.textContent = "Pause";
features.appendChild(pause);
pause.addEventListener("click", () => {
    hovering =!hovering;
})

// coloring grid
let size = 16;
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
            pixels.style.backgroundColor = userColor;
        }
    }))
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
        pixels.style.backgroundColor = "transparent";
    }
)}