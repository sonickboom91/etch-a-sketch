const container = document.getElementById("container");

function createGrid(side) {
    let numDivs = side * side;

    for (let i = 0; i < numDivs; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
    };
};

createGrid(16);

const squares = document.querySelectorAll(".square");

squares.forEach(square => {
    square.style.width = `calc(100% / 16`;
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "gray";
    });
});

const button = document.querySelector("button");

button.addEventListener("click", () => {
    const input = Number(prompt("Enter the number (1-100) of squares per side to resize the grid."));

    console.log(input);

    if (input < 0 || input > 100) {
        alert("Sorry! That's not a number between 1 and 100!");
        return;
    } else if (isNaN(input)) {
        alert("Sorry, that wasn't a number! Try entering a number between 1 and 100!");
        return;
    } else if (input === 0) {
        alert("You didn't enter anything! Try entering a number between 1 and 100!");
        return;
    } else {
        while (container.hasChildNodes()) {
            container.removeChild(container.firstElementChild);
        }

        createGrid(input);

        const squares = document.querySelectorAll(".square");

        squares.forEach(square => {
            square.style.width = `calc(100% / ${input})`;
            square.addEventListener("mouseenter", () => {
                square.style.backgroundColor = "gray";
            });
        });
    }
});