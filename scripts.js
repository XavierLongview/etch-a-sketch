const container = document.querySelector('.container');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    let response = +prompt("How many squares per column/row?");
    if (response <= 100) {
        container.style.gridTemplateColumns = `repeat(${+response}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${+response}, 1fr)`;
        container.innerHTML = '';
        for (i = 0; i < (response ** 2); i++) {
            const div = document.createElement('div');
            div.classList.add('box');
            container.appendChild(div);
            div.addEventListener('mouseover', function (e) {
                e.target.style.backgroundColor = 'yellow';
            });
        }        
    }
})