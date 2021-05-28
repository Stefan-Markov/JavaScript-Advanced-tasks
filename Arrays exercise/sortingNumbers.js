function solve(arr) {
    arr.sort((a, b) => a - b);
    let result = [];
    let mask = arr.slice();
    arr.forEach((el, i) => i % 2 !== 0 ? result.push(mask.pop()) : result.push(mask.shift()));
    // console.log(result.join(" "));
    return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);