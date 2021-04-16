function proccessOddNumbers(numbers) {

    let oddNumbers = numbers
        .filter((x, i) => i % 2 != 0)
        .map(x => x * 2)
        .reverse()
        .join(' ');


    console.log(oddNumbers);
}

proccessOddNumbers([10, 15, 20, 25]);