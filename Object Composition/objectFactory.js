function objectFactory(input) {

    let propLIst = JSON.parse(input);
    let result = propLIst.reduce((a, x) => ({...a, ...x}), {});
    // let result = propLIst.reduce((a, x) => Object.assign(a, x), {}); same code

    console.log(result);
}

objectFactory(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`);
// { canMove: true, doors: 4, capacity: 5 }
objectFactory(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`);
// { canFly: true, canMove: true, doors: 4, capacity: 255, canLand: true }