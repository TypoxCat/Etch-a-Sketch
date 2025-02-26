let size = 20;
const containers = document.querySelector(".container");
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
    pixels.style.backgroundColor = "red";
}));


