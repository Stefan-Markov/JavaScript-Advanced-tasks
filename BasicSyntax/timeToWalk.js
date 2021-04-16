function timeToWalk(steps, stepLength, speed) {

    let length = steps * stepLength;
    let totalRestTimeInMin = Math.floor(length / 500);
    let totalTime = length / speed / 1000 * 60;
    let totalTimeInSec = Math.ceil((totalRestTimeInMin + totalTime) * 60);
    let result = new Date(null, null, null, null, null, totalTimeInSec);

    return result.toTimeString().split(' ')[0];
}

console.log(timeToWalk(4000, 0.60, 5));