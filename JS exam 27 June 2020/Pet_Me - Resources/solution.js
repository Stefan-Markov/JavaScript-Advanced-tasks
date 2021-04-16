function solve() {
    let inputElements = Array.from(document.querySelectorAll('#container > input'));
    let [name, age, kind, owner] = inputElements;
    let adoptUl = document.querySelector('#adoption > ul');
    let adoptedUl = document.querySelector('#adopted > ul');
    let buttonElement = document.querySelector('#container > button').addEventListener('click', e => {
        e.preventDefault();
        if (!inputElements.every(x => x.value)) {
            return;
        }
        if (!Number(age.value)) {
            return;
        }
        let liElement = document.createElement('li');
        let pElement = document.createElement('p');
        pElement.innerHTML =
            `<strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong>`;

        let span = document.createElement('span');
        let buttonCreate = document.createElement('button');
        span.textContent = `Owner: ${owner.value}`;
        buttonCreate.textContent = 'Contact with owner';

        liElement.appendChild(pElement);
        liElement.appendChild(span);
        liElement.appendChild(buttonCreate);
        adoptUl.appendChild(liElement);

        name.value = '';
        age.value = '';
        owner.value = '';
        kind.value = '';

        buttonCreate.addEventListener('click', petButtonClick)
    });

    function petButtonClick(e) {
        let parent = e.currentTarget.parentElement;
        e.currentTarget.remove();
        let div = document.createElement('div');
        let inputElement = document.createElement('input');
        inputElement.placeholder = 'enter your names'
        let buttonTakeIt = document.createElement('button');

        div.appendChild(inputElement);
        buttonTakeIt.textContent = 'Yes! I take it.';
        div.appendChild(buttonTakeIt);

        parent.appendChild(div);

        buttonTakeIt.addEventListener('click', onTakeItButtonClick);
    }

    function onTakeItButtonClick(e) {
        let parentButtonElement = e.currentTarget.parentElement;
        let liElement = e.currentTarget.parentElement.parentElement;
        adoptedUl.appendChild(liElement);
        let input = liElement.querySelector('input');
        let ownerName = liElement.querySelector('span');
        let newOwnerName = input.value;

        if (!newOwnerName) {
            return;
        }
        ownerName.textContent = `New Owner: ${newOwnerName}`;

        parentButtonElement.remove();
        let buttonChecked = document.createElement('button');
        buttonChecked.textContent = 'Checked';
        liElement.appendChild(buttonChecked);

        buttonChecked.addEventListener('click', e => {
            // liElement.remove();
            e.currentTarget.parentElement.remove();
        })
    }
}

