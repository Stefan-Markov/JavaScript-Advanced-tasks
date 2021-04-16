function greatestCommonDivisor(first, second) {


    firstNum = Number(first);
    secondNum = Number(second);

    let lower = Math.min(first, second);
    let bigger = Math.max(first, second);
    let output = 0;

    for (let i = lower; i >= 0; i--) {
        if (lower % i == 0 && bigger % i == 0) {
            output = i;
            break;
        }


    }
    console.log(output);
}
greatestCommonDivisor(2154, 458);

let gdr = (a, b) => !b ? a : gdr(b, a % b);
// short version 

console.log(gdr(2154, 458));