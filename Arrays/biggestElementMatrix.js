function biggestElement(arr) {

    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            if (maxNumber < arr[row][col]) {
                maxNumber = arr[row][col];
            }
        }
    }
    console.log(maxNumber);
}

biggestElement([[20, 50, 10],
[8, 33, 145]]
);

biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
);