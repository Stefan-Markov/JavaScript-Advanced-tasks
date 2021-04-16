function lockedProfile() {
    [...document.getElementsByClassName('profile')].forEach(parent => {
        let button = parent.querySelectorAll('button')[0];

        button.addEventListener('click', () => {
            let unlock = parent.querySelectorAll('input')[1].checked;
            let hiddenDiv = parent.querySelectorAll('div')[0];

            if (unlock) {
                hiddenDiv.style.display = 'block';
                button.textContent = 'Hide it';
            } else {
                hiddenDiv.style.display = 'none';
                button.textContent = 'Show more';
            }
        });
    });
}