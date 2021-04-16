function getArticleGenerator() {
    // let button = document.getElementsByTagName('button')[0];
    // let parrentDiv = document.getElementById('content');
    //
    // button.addEventListener('click', showNext);
    //
    // function showNext() {
    //     if (articles.length === 0) {
    //         button.disabled = false;
    //     }
    //     if (articles.length > 0) {
    //         let div = document.createElement('div');
    //         div.classList.add('article');
    //         div.classList.add('div');
    //         div.textContent = articles.shift();
    //         parrentDiv.appendChild(div);
    //     }
    // }

    let content = document.getElementById('content');

    function showNext() {
        if (articles.length > 0) {
            let article = document.createElement('article');
            article.textContent = articles.shift();
            content.appendChild(article);
        }
    }
    return showNext;
}