function solve() {

    let buttonDropDown = document.getElementById('dropdown');
    let ul = document.getElementById('dropdown-ul');
    let box = document.getElementById('box');

    buttonDropDown.addEventListener('click', () => {
        if (ul.style.display == 'block') {
            ul.style.display = 'none'
            box.style.background = 'rgb(114, 112, 112)';

        } else {
            ul.style.display = 'block'
            // document.addEventListener('click', function (e) {
            //     if (e.target.tagName == "LI") {
            //         let li = e.target;
            //         console.log(li.innerText)
            //         box.style.background = li.innerText;
            //     }
            // });
            ul.addEventListener("click", function (e) {
                let li = e.target;
                // console.log(li.innerText);
                box.style.background = li.innerText;
            });
        }
    });
}