function addItem() {
    let list = document.getElementById('items');
    let input = document.getElementById('newText');
    list.addEventListener('click', deleteEl);

    let liElement = document.createElement('li');
    liElement.innerText = input.value;

    let deleteElement = document.createElement('span');

    deleteElement.innerText = `     \t[delete]`;
    deleteElement.style.cursor = 'pointer';

    liElement.appendChild(deleteElement);
    list.appendChild(liElement);

    function deleteEl(e) {
        e.target.parentElement.remove();
    }

    input.value = '';
}