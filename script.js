function gridRemover() {
    const rows = document.querySelectorAll(`.row`);
    rows.forEach((row) => row.remove());
}

function gridCreator(length, width) {  
    if ((length > 100) || (width > 100)) {
        alert(`100 is the maximum length and width. Please input lower.`)
        length = 16;
        width = 16;
    }
    const container = document.querySelector(`.container`);
    for (let i = 0; i < length; i++) {
        const row = document.createElement(`div`);
        row.classList.add(`row`)
        row.classList.add(`r${i}`);
        row.setAttribute(`style`, 
        `border: 1px solid black;
        flex: auto;
        display: flex;`);
        for (let k = 0; k < width; k++) {
            const square = document.createElement(`div`);
            square.classList.add(`s${(k + 1) + (width*(i + 1))}`);
            square.setAttribute(`style`,
            `border: 1px solid black;
            flex: auto;`);
            row.appendChild(square);
            if ((i < length) && (k == width)) {
                k = 0;
                break;
            } 
        }
        container.appendChild(row);
    }
    return;
}

gridCreator(16, 16);

const button = document.querySelector(`button`);
button.addEventListener(`click`, function () {
    let userLength = prompt(`Enter a length for your new grid (in squares): `)
    let userWidth = prompt(`Enter a width for your new grid: `)
    gridRemover();
    gridCreator(userLength, userWidth);
    return;
});
document.addEventListener(`mouseover`, function(e) {
    e.stopPropagation();
    let targetClass = e.target.classList.value;
    if (targetClass.slice(0, 1) == `s`) {
        let length = targetClass.length;
        let classValue = targetClass.slice(1, length + 1);
        let colorSquare = document.querySelector(`.s${classValue}`);
        console.log(colorSquare)
        colorSquare.classList.add(`colorFill`);
    }
    return;
}, 
{capture: false});