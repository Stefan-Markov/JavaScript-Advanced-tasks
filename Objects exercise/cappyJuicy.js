function juicy(input) {

    let result = {};
    let juicyOrder = {};

    input.forEach(line => {
        let [product, quantity] = line.split(" => ");
        if (!result[product]) {
            result[product] = Number(quantity);
        } else {
            result[product] += Number(quantity);
        }
        if (result[product] >= 1000) {
            juicyOrder[product] = 0
        }
    });
    Object.keys(result).forEach(j => {
        if (juicyOrder.hasOwnProperty(j)) {
            juicyOrder[j] += parseInt(result[j] / 1000);
        }
    })
    Object.keys(juicyOrder).forEach(el => console.log(`${el} => ${juicyOrder[el]}`));
}

juicy(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);

juicy(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);