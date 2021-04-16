function sortNumbers (array) {
    const result = [];
    array.forEach(element => {
        if (element < 0) {
            result.unshift(element);
        }
        else{
            result.push(element);
        }
    });
    return result.join('\n');
}

console.log(sortNumbers([3, -2, 0, -1]));