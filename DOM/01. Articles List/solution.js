function createArticle() {

    let titleArticleInput = document.getElementById('createTitle');
    titleArticleInput.setAttribute('placeholder', 'enter next one :)')
    let contentArticleInput = document.getElementById('createContent');
    let articlesCollection = document.getElementById('articles');


    let newArticle = document.createElement('article');
    let newTitle = document.createElement('h3');
    let newP = document.createElement('p');
    if (titleArticleInput.value.length > 0 && contentArticleInput.value.length > 0) {
        newTitle.textContent = titleArticleInput.value;
        newP.textContent = contentArticleInput.value;

        newArticle.appendChild(newTitle);
        newArticle.appendChild(newP);

        articlesCollection.appendChild(newArticle);

        titleArticleInput.value = '';
        contentArticleInput.value = '';
    }

}