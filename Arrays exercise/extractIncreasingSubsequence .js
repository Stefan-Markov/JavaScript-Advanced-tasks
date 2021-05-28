function extractSubsequence(arr) {

    let output = [];
    let max = Number.MIN_SAFE_INTEGER;
    arr.forEach(element => {
        if (max <= element) {
            max = element;
            output.push(max);
        }
    });
    // console.log(output.join(" "))
    return output;
}

extractSubsequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);


extractSubsequence([1,
    2,
    3,
    4]
);

extractSubsequence([20, 
    3, 
    2, 
    15,
    6, 
    1]
    );