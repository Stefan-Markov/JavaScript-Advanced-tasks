function printArrNElelent(arr) {

    let step = Number(arr.pop());
    arr.forEach((num, index) => {
        if (index % step == 0)
            console.log(num)
    });
}

printArrNElelent(['5',
    '20',
    '31',
    '4',
    '20',
    '2']
);

printArrNElelent(['dsa',
    'asd',
    'test',
    'tset',
    '2']

);