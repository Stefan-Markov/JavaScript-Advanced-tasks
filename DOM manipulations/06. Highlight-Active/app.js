function focus() {
    let div = document.getElementsByTagName('div')[0];

    div.addEventListener('focus', onfocus, true);
    div.addEventListener('blur', blur, true);

    function onfocus(e) {
        e.target.parentNode.classList.add('focused');
    }

    function blur(e) {
        e.target.parentNode.classList.remove('focused');
    }

}