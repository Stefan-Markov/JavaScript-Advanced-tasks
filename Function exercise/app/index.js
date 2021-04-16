function solve() {
    let tr = document.getElementsByTagName('tr');
    let lastClicked;
    Array.from(tr).slice(1).forEach(row => {
        row.addEventListener('click', (e) => {
            let element = e.target.parentElement.style;
            if (element.backgroundColor === '' || element.backgroundColor === undefined) {
                element.backgroundColor = '#413f5e';
                if (lastClicked) {
                    lastClicked.backgroundColor = '';
                }
            } else {
                element.backgroundColor = '';
            }
            lastClicked = element;
        });
    })
}
