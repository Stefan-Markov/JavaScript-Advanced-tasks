function sortArray(input, criteria) {

    let sortFunc = {
        asc: function (arr) {
            return arr.sort((a, b) => a - b);
        },
        desc: function (arr) {
            return arr.sort((a, b) => b - a);
        }
        //    asc: (arr) => arr.sort((a, b) => a - b),
        //    desc: (arr) => arr.sort((a, b) => b - a)
    }

    let func = sortFunc[criteria];
    return func(input);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
// [6, 7, 8, 14, 17]
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));
// [17, 14, 8, 7, 6]