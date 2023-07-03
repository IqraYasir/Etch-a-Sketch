const container = document.querySelector(`.container`);
for (let i = 0; i < 16; i++) {
    const row = document.createElement(`div`);
    row.classList.add(`${i}`);
    row.setAttribute(`style`, 
    `border: 1px solid black;
    flex: auto;
    display: flex;`);
    for (let k = 0; k < 16; k++) {
        const square = document.createElement(`div`);
        square.classList.add(`s${(k + 1) + (16*(i + 1))}`);
        square.setAttribute(`style`,
        `border: 1px solid black;
        flex: auto;`);
        row.appendChild(square);
        if ((i < 16) && (k == 16)) {
            k = 0;
            break;
        } 
    }
    container.appendChild(row);
}

document.addEventListener(`mouseover`, function(e) {
    e.stopPropagation();
    let length = e.target.classList.value.length;
    let classValue = e.target.classList.value.slice(1, length + 1);
    if (16 < classValue) {
        let colorSquare = document.querySelector(`.s${classValue}`);
        colorSquare.classList.add(`colorFill`);
    }
    return;
}, 
{capture: false});