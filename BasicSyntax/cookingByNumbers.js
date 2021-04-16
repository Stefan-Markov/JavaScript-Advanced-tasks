function cookingByNumbers(inputArr) {

    let n = parseInt(inputArr[0]);

    let func = {
        chop: (x) => x / 2,
        dice: (x) => Math.sqrt(x),
        spice: (x) => x + 1,
        bake: (x) => x * 3,
        fillet: (x) => (0.8 * x).toFixed(1)
    }

    for (let i = 1; i < inputArr.length; i++) {
        n = func[inputArr[i]](n);
        console.log(n);
    }
}

cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);
