function solve() {
    let addBtn = document.getElementById('add');
    let openSection = document.getElementsByTagName('section')[1];
    let progressSection = document.getElementsByTagName('section')[2];
    let completedSection = document.getElementsByTagName('section')[3];
    addBtn.addEventListener('click', event => {
        event.preventDefault();
        let task = document.getElementById('task');
        let description = document.getElementById('description');
        let date = document.getElementById('date');

        if (task.value === '' || description.value === '' || date.value === '') {
            return;
        }
        let article = document.createElement('article');

        let h3 = document.createElement('h3')
        h3.innerText = task.value;
        let pDescription = document.createElement('p');
        pDescription.innerText = `Description: ${description.value}`;

        let pDate = document.createElement('p');
        pDate.innerText = `Due Date: ${date.value}`;

        let div = document.createElement('div');
        div.className = 'flex';
        let buttonStart = document.createElement('button');
        buttonStart.className = 'green';
        buttonStart.innerText = 'Start';

        buttonStart.addEventListener('click', e => {
            let buttonFinish = document.createElement('button');
            buttonFinish.className = 'orange';
            buttonFinish.innerText = 'Finish';

            buttonFinish.addEventListener('click', () => {
                article.lastElementChild.remove();
                completedSection.lastElementChild.appendChild(article);
            })

            article.lastElementChild.children[0].remove();
            article.lastElementChild.appendChild(buttonFinish);
            progressSection.lastElementChild.appendChild(article);

        });

        div.appendChild(buttonStart);

        let buttonDelete = document.createElement('button');
        buttonDelete.className = 'red';
        buttonDelete.innerText = 'Delete';
        buttonDelete.addEventListener('click', deleteArticle)
        div.appendChild(buttonDelete);


        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pDate);
        openSection.lastElementChild.appendChild(article);
        article.appendChild(div);

        task.value = '';
        description.value = '';
        date.value = '';
    });

    function deleteArticle(event) {
        event.target.parentElement.parentElement.remove();
    }
}