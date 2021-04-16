function sameNumber(number) {

    number = Number(number);
    let sum = 0;
    let lastDigit = number % 10;
    let isEqualcount = 0;

    while (number / 10 > 0) {
        let digit = number % 10;

        sum += digit;

        if (digit !== lastDigit) {
            isEqualcount++;
        }
        lastDigit = digit;
        number = Math.floor(number / 10);
    }
    console.log(isEqualcount === 0 ? true : false);
    console.log(sum);
}

sameNumber(2223);