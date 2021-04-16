function diaginalSum(arr) {

    let firstDiagonal = arr[0][0];
    let secondDiagonal = 0;

    for (let i = 1; i < arr.length; i++) {
        firstDiagonal += arr[i][i];
    }

    for (let col = arr.length - 1; col >= 0; col--) {
        let sum = arr[arr.length - 1 - col][col];
        secondDiagonal += sum;
    }
    console.log(firstDiagonal + " " + secondDiagonal);
}

diaginalSum([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
);

diaginalSum([[20, 40],
[10, 60]]
);