function findMinTwoNumbers(array) {
    const sorted = array.sort((a, b) => a - b);
    return `${sorted[0]} ${sorted[1]}`;
}

console.log(findMinTwoNumbers([3, 0, 10, 4, 7, 3]));
