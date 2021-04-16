function fruits(fruit, weight, price){
    let money = (weight * price)/1000;

    console.log(`I need $${money.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}`)
}

fruits("orange", 2500, 1.80)