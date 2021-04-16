function numbers(numbers) {
    let firstElement = Number(numbers[0]);
    let secondElement = Number(numbers[numbers.length - 1]);

    console.log(firstElement + " " + secondElement)
}
numbers(['20', '30', '40'])