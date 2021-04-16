function catalogue(input) {
    let result = {};
    input.forEach(line => {
        let [name, price] = line.split(" : ");

        price = Number(price);
        let letter = name[0].toUpperCase();
        if (!result[letter]) {
            result[letter] = [];
        }
        let product = {name, price}
        result[letter].push(product);
    });
    let sortedByLetter = Object.entries(result).sort((curr, next) => {
        return curr[0].localeCompare(next[0]);
    });
    for (let i = 0; i < sortedByLetter.length; i++) {
        console.log(sortedByLetter[i][0]);
        let sortedByName = sortedByLetter[i][1].sort((curr, next) => curr.name.localeCompare(next.name))
            .forEach(el => console.log(`  ${el.name}: ${el.price}`))
    }
}

catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);