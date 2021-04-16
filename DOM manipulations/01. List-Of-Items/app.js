function addItem() {
    let inputElement = document.getElementById('newItemText');
    let liElement = document.createElement('li');
    liElement.innerText = inputElement.value;
    let items = document.getElementById('items');
    items.appendChild(liElement);
    inputElement.value = '';
}