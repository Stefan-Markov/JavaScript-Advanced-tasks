function solve() {
    let word = document.getElementById('searchField');
    document.getElementById('searchBtn').addEventListener('click', () => {

        Array.from(document.querySelectorAll('tbody>tr')).forEach(row => {
            if (row.textContent.includes(word.value) && word.value.length > 0) {
                row.className = 'select';
            } else if (word.value.length > 0) {
                row.className = '';
            }
        });
        word.value = '';
    });

}