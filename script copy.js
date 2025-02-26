const containers = document.querySelector(".container");

// features: size, color, pause, reset EVAL INI
const features = document.createElement("div");
containers.appendChild(features);
const gridSizes = document.createElement("div");
gridSizes.textContent = "Grid size:";
const ipt = document.createElement("input");
let sizes = ipt.value;
features.appendChild(gridSizes);
features.appendChild(ipt);
reset.textContent = "Reset";
const reset = document.createElement("button");

features.appendChild(reset);
reset.addEventListener("click", () => {
    resetPixels();
})
 
//evaluate ini
// const colorPicker = document.createElement("input");
// colorPicker.type = 'color';
// let userColor = "black";
// colorPicker.setAttribute("value", "#000000");
// colorPicker.addEventListener("change", updateColor, false);
// colorPicker.select();

// function updateColor(event) {
//     userColor = event.target.value;
// };
// features.appendChild(colors);




// coloring grid
let size = 20;
console.log(size);

for (i = size; i > 0; i--){
    newRow();
}

function newRow() {
    const row = document.createElement("div");
    containers.appendChild(row); 
    row.classList.add("row");
    row.style.display = "flex";
    for (j = size; j > 0; j--){
        newPixel(row);
    }
}

function newPixel(n) {
    const pixel = document.createElement("div");
    pixel.style.width = "16px";
    pixel.style.height = "16px";
    pixel.style.border = "thin solid black";
    pixel.classList.add("px");
    n.appendChild(pixel); 
}

const pixels = document.querySelectorAll(".px");
pixels.forEach((pixels) => pixels.addEventListener("mouseover", () => {
    pixels.style.backgroundColor = "red"; //evaluate ini
}));

function resetPixels() {
    pixels.forEach((pixels) => {
        pixels.style.backgroundColor = "transparent";
    }
)};

// // features: size, color, pause, reset
// const features = document.createElement("div");
// containers.appendChild(features);
// const gridSizes = document.createElement("div");
// gridSizes.textContent = "Grid size:";
// const ipt = document.createElement("input");
// let sizes = ipt.value;
// features.appendChild(gridSizes);
// features.appendChild(ipt);

// ipt.addEventListener("click", () => {
//     sizes = ipt.value;
// })