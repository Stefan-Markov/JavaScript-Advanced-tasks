function deleteByEmail() {
    let tableRow = document.getElementById('customers').getElementsByTagName('td');
    let input = document.getElementsByTagName('input')[0];
    let found = false;

    for (let childrenKey of tableRow) {
        if(childrenKey.textContent === input.value){
            childrenKey.parentNode.remove();
            input.value = '';
            document.getElementById('result').textContent = 'Deleted.';
            found = true;
        }
    }
    if(found === false){
        document.getElementById('result').textContent = 'Not found.'
    }
}