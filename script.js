const container = document.querySelector(`.container`);
const rowArray = [];
for (let i = 0; i < 16; i++) {
    const row = document.createElement(`div`);
    row.classList.add(`${i}`);
    row.setAttribute(`style`, 
    `border: 1px solid black;
    flex: auto;`);
    rowArray.push(row)
    container.appendChild(rowArray[i]);
}


