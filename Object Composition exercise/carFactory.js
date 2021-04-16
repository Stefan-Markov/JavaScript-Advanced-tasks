function carFactory(input) {

    let {model, power, color, carriage, wheelsize} = input;

    let engines = {
        smallEngine: {power: 90, volume: 1800},
        normalEngine: {power: 120, volume: 2400},
        monsterEngine: {power: 200, volume: 3500}
    }
    let engine = Object.values(engines).find(value => value.power >= power);
    if (wheelsize % 2 === 0) {
        wheelsize--;
    }

    return {
        model,
        engine,
        carriage: {type: carriage, color},
        wheels: [wheelsize, wheelsize, wheelsize, wheelsize]
    }
}

let build = carFactory({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
);

console.log(build);

let build2 = carFactory({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
);

console.log(build2);