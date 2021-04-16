function rotate(array) {
    let rotations = Number(array.pop()) % array.length;
    for (let rotation = 0; rotation < rotations; rotation++) {
        array.unshift(array.pop());
    }
    return array.join(' ');
}

console.log(rotate(['1',
    '2',
    '3',
    '4',
    '2']
));

console.log(rotate(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']
));