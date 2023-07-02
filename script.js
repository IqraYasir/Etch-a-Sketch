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
        square.classList.add(`${(k + 1)*(i + 1) - 1}`);
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