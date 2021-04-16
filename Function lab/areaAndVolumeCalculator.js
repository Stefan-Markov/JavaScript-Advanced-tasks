function solveArea(area, vol, input) {

    let figures = JSON.parse(input);

    return figures.map(function (figure) {
        return {
            area: Math.abs(area.call(figure)),
            volume: Math.abs(vol.call(figure))
        }
    });

}

function area() {
    return this.x * this.y;
}

function vol() {
    return this.x * this.y * this.z;
}

let result = solveArea(area, vol, `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`);

console.log(result);

