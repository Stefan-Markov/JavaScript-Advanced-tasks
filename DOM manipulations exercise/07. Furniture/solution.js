function solve() {
    document.querySelector("input").disabled = false;
    let [generate, buy] = [...document.querySelectorAll('button')];
    let [input, output] = document.querySelectorAll("textarea");
    generate.addEventListener('click', () => {

        let product = JSON.parse(input.value);

        product.forEach(pro => {
            let {name, ima, price, decFactor} = pro;
            let htmlString = ` <tr>
                                        <td>
                                            <img
                                                src="${ima}">
                                        </td>
                                        <td>
                                            <p>${name}</p>
                                        <td>
                                            <p>${price}</p>
                                        </td>
                                        <td>
                                            <p>${decFactor}</p>
                                        </td>
                                        <td>
                                            <input type="checkbox"/>
                                        </td>
                                    </tr>`;
            document.querySelectorAll('tbody')[0].insertAdjacentHTML('beforeend', htmlString)
        });
        input.value = '';
    });
    buy.addEventListener('click', () => {

        let [products, prices, factors] = [[], [], []];

        [...document.querySelectorAll('tbody > tr')].forEach(row => {
            if (row.querySelectorAll('input')[0].checked) {
                let tableData = row.querySelectorAll('p');

                products.push(tableData[0].textContent);
                prices.push(+tableData[1].textContent);
                factors.push(+tableData[2].textContent);
            }
        });

        let totalPrice = prices.reduce((sum, num) => sum + num, 0);
        let avgFactors = factors.reduce((sum, num) => sum += num / factors.length);
        output.textContent = `Bought furniture: ${products.join(", ")}\n` +
            `Total price: ${totalPrice.toFixed(2)}\n` +
            `Average decoration factor: ${avgFactors.toFixed(2)}`;

    });
}