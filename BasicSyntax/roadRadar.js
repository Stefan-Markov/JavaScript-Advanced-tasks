function roadRadar(speed, area) {
    if(speed < 0){
        return;
    }
    let calculateOverLimit = (limit, speed) => {
        if (limit >= speed) {
            return;
        }
        let overLimit = speed - limit;
        if (overLimit <= 20) {
            console.log(`The speed is ${overLimit} km/h faster than the allowed speed of 20 - speeding`);
        } else if (overLimit <= 40) {
            console.log(`The speed is ${overLimit} km/h faster than the allowed speed of 90 - excessive speeding`);
        } else if (overLimit > 40) {
            console.log(`The speed is ${overLimit} km/h faster than the allowed speed of 130 - reckless driving`);
        }
    }
    switch (area) {
        case 'motorway':
            if (speed <= 130) {
                console.log(`Driving ${speed} km/h in a 130 zone`)
            } else {
                calculateOverLimit(130, speed);
            }
            break;
        case 'interstate':
            if (speed <= 90) {
                console.log(`Driving ${speed} km/h in a 90 zone`)
            } else {
                calculateOverLimit(90, speed);
            }
            break;
        case 'city':

            if (speed <= 50) {
                console.log(`Driving ${speed} km/h in a 50 zone`)
            } else {
                calculateOverLimit(50, speed);
            }
            break;
        case 'residential':
            if (speed <= 20) {
                console.log(`Driving ${speed} km/h in a 20 zone`)
            } else {
                calculateOverLimit(20, speed);
            }
            break;
    }
}
roadRadar(-21, 'residential');
roadRadar(21, 'residential');     // speeding
roadRadar(120, 'interstate');
roadRadar(40, 'city');
roadRadar(200, 'motorway');