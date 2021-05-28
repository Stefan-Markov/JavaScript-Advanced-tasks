
    function printArrNElelent(array, n) {
        let newArr = []
        for (let i = 0; i < array.length; i += n) {
            const element = array[i];
            newArr.push(element);
        }
        return newArr;
}

console.log(printArrNElelent(['5',
    '20',
    '31',
    '4',
    '20',
    '2']
));

console.log(printArrNElelent(['dsa',
    'asd',
    'test',
    'tset',
    '2']
));