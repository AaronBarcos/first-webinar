let count = 1;

function render() {

    let container = document.getElementById("pokemons");

    container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`;
}

let left = document.getElementById("left");
let right = document.getElementById("right");

left.onclick = function() {
    if (count > 1) {
        count--;
        render();
    }
}

right.onclick = function() {
    if (count < 650) {
        count++;
        render();
    }
}

render();