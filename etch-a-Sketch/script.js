let n = 16;
function grid_generator(n) {
    let cell_width = Math.round(100 / n);
    for (let i = 0; i < n; i++) {
        const grid_row = document.createElement('div');
        grid_row.className = 'container';
        for (let j = 0; j < n; j++) {
            const grid_cell = document.createElement('div');
            grid_cell.style.width = `${cell_width}vw`;
            grid_cell.style.height = `${cell_width}vw`;
            grid_row.appendChild(grid_cell);
        }
        const main = document.querySelector("#main-container");
        main.appendChild(grid_row);
    }
}

function add_lister(color) {
    document.querySelectorAll('.container div').forEach(ele => ele.addEventListener('mouseover', function(event) {
        if (color == 'random') event.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        else event.target.style.backgroundColor = color;
    }));
    document.querySelectorAll('.container div').forEach(ele => ele.addEventListener('touchstart', function(event) {
        if (color == 'random') event.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        else event.target.style.backgroundColor = color;
    }));
}

// By default grid generation
grid_generator(n);
add_lister('black');

// Grid genertaion for User input 
document.getElementById('resize').addEventListener('click', function (event) {
    let input = prompt("Please Enter the Number of Pixel you want in each line [10 to 100]: ");
    if (input > 100 || input < 10) {
        document.getElementById('main-container').innerText = 'Invalid Canvas Size';
    }
    else {
        document.getElementById('main-container').innerHTML = '';
        grid_generator(input);
        add_lister('black');
    }
});

document.getElementsByTagName('input')[0].addEventListener('change', (event) => {
    const color = event.target.value;
    add_lister(color);
})
document.getElementById('random').addEventListener('click', () => {add_lister('random')});
document.getElementById('toggle-grid').addEventListener('click', () => {document.querySelectorAll('.container div').forEach(div => div.style.border = 'none')})