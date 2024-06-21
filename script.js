const figures = [
    // Círculos
    { type: 'circle', color: 'blue', size: 'large', thickness: 'thick' },
    { type: 'circle', color: 'blue', size: 'large', thickness: 'thick' },
    { type: 'circle', color: 'blue', size: 'small', thickness: 'thin' },
    { type: 'circle', color: 'blue', size: 'small', thickness: 'thin' },
    { type: 'circle', color: 'red', size: 'large', thickness: 'thick' },
    { type: 'circle', color: 'red', size: 'large', thickness: 'thick' },
    { type: 'circle', color: 'red', size: 'small', thickness: 'thin' },
    { type: 'circle', color: 'red', size: 'small', thickness: 'thin' },
    { type: 'circle', color: 'yellow', size: 'large', thickness: 'thick' },
    { type: 'circle', color: 'yellow', size: 'large', thickness: 'thick' },
    { type: 'circle', color: 'yellow', size: 'small', thickness: 'thin' },
    { type: 'circle', color: 'yellow', size: 'small', thickness: 'thin' },
    // Cuadrados
    { type: 'square', color: 'blue', size: 'large', thickness: 'thick' },
    { type: 'square', color: 'blue', size: 'large', thickness: 'thick' },
    { type: 'square', color: 'blue', size: 'small', thickness: 'thin' },
    { type: 'square', color: 'blue', size: 'small', thickness: 'thin' },
    { type: 'square', color: 'red', size: 'large', thickness: 'thick' },
    { type: 'square', color: 'red', size: 'large', thickness: 'thick' },
    { type: 'square', color: 'red', size: 'small', thickness: 'thin' },
    { type: 'square', color: 'red', size: 'small', thickness: 'thin' },
    { type: 'square', color: 'yellow', size: 'large', thickness: 'thick' },
    { type: 'square', color: 'yellow', size: 'large', thickness: 'thick' },
    { type: 'square', color: 'yellow', size: 'small', thickness: 'thin' },
    { type: 'square', color: 'yellow', size: 'small', thickness: 'thin' },
    // Rectángulos
    { type: 'rectangle', color: 'blue', size: 'large', thickness: 'thick' },
    { type: 'rectangle', color: 'blue', size: 'large', thickness: 'thick' },
    { type: 'rectangle', color: 'blue', size: 'small', thickness: 'thin' },
    { type: 'rectangle', color: 'blue', size: 'small', thickness: 'thin' },
    { type: 'rectangle', color: 'red', size: 'large', thickness: 'thick' },
    { type: 'rectangle', color: 'red', size: 'large', thickness: 'thick' },
    { type: 'rectangle', color: 'red', size: 'small', thickness: 'thin' },
    { type: 'rectangle', color: 'red', size: 'small', thickness: 'thin' },
    { type: 'rectangle', color: 'yellow', size: 'large', thickness: 'thick' },
    { type: 'rectangle', color: 'yellow', size: 'large', thickness: 'thick' },
    { type: 'rectangle', color: 'yellow', size: 'small', thickness: 'thin' },
    { type: 'rectangle', color: 'yellow', size: 'small', thickness: 'thin' },
    // Triángulos
    { type: 'triangle', color: 'blue', size: 'large', thickness: 'thick' },
    { type: 'triangle', color: 'blue', size: 'large', thickness: 'thick' },
    { type: 'triangle', color: 'blue', size: 'small', thickness: 'thin' },
    { type: 'triangle', color: 'blue', size: 'small', thickness: 'thin' },
    { type: 'triangle', color: 'red', size: 'large', thickness: 'thick' },
    { type: 'triangle', color: 'red', size: 'large', thickness: 'thick' },
    { type: 'triangle', color: 'red', size: 'small', thickness: 'thin' },
    { type: 'triangle', color: 'red', size: 'small', thickness: 'thin' },
    { type: 'triangle', color: 'yellow', size: 'large', thickness: 'thick' },
    { type: 'triangle', color: 'yellow', size: 'large', thickness: 'thick' },
    { type: 'triangle', color: 'yellow', size: 'small', thickness: 'thin' },
    { type: 'triangle', color: 'yellow', size: 'small', thickness: 'thin' },
];

const container = document.getElementById('figures-container');

const renderFigures = (figures) => {
    container.innerHTML = '';
    figures.forEach(figure => {
        const figureBox = document.createElement('div');
        figureBox.className = 'figure-box';
        
        const figureElement = document.createElement('div');
        figureElement.className = `figure ${figure.type} ${figure.size} ${figure.thickness}`;
        figureElement.style.borderColor = 'black';
        figureElement.style.borderWidth = figure.thickness === 'thick' ? '10px' : '2px';
        figureElement.style.borderStyle = 'solid';
        figureElement.style.backgroundColor = figure.color;

        switch (figure.type) {
            case 'circle':
                figureElement.style.width = figure.size === 'large' ? '100px' : '50px';
                figureElement.style.height = figure.size === 'large' ? '100px' : '50px';
                figureElement.style.borderRadius = '50%';
                break;
            case 'square':
                figureElement.style.width = figure.size === 'large' ? '100px' : '50px';
                figureElement.style.height = figure.size === 'large' ? '100px' : '50px';
                break;
            case 'rectangle':
                figureElement.style.width = figure.size === 'large' ? '120px' : '60px';
                figureElement.style.height = figure.size === 'large' ? '80px' : '40px';
                break;
            case 'triangle':
                figureElement.style.width = '0';
                figureElement.style.height = '0';
                if (figure.size === 'large') {
                    figureElement.style.borderLeft = '50px solid transparent';
                    figureElement.style.borderRight = '50px solid transparent';
                    figureElement.style.borderBottom = `100px solid ${figure.color}`;
                } else {
                    figureElement.style.borderLeft = '25px solid transparent';
                    figureElement.style.borderRight = '25px solid transparent';
                    figureElement.style.borderBottom = `50px solid ${figure.color}`;
                }
                break;
        }

        const figureInfo = document.createElement('div');
        figureInfo.innerText = `${figure.type}, ${figure.color}, ${figure.size}, ${figure.thickness}`;

        figureBox.appendChild(figureElement);
        figureBox.appendChild(figureInfo);
        container.appendChild(figureBox);
    });
};

document.getElementById('filterBtn').addEventListener('click', () => {
    const colorFilter = document.getElementById('colorFilter').value;
    const sizeFilter = document.getElementById('sizeFilter').value;
    const typeFilter = document.getElementById('typeFilter').value;
    const thicknessFilter = document.getElementById('thicknessFilter').value;

    const filteredFigures = figures.filter(figure => {
        return (!colorFilter || figure.color === colorFilter) &&
               (!sizeFilter || figure.size === sizeFilter) &&
               (!typeFilter || figure.type === typeFilter) &&
               (!thicknessFilter || figure.thickness === thicknessFilter);
    });

    renderFigures(filteredFigures);
});

// Render inicial
renderFigures(figures);


    