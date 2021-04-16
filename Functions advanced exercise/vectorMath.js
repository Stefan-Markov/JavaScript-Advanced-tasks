vector = {
    add: ([x1, y1], [x2, y2]) => [x1 + y1, x2 + y2],
    multiply: ([x1, y1], z1) => [x1 * z1, y1 * z1],
    length: ([x1, y1]) => Math.sqrt(x1 ** 2 + y1 ** 2),
    dot: ([x1, y1], [x2, y2]) => Math.abs(x1 * y1 * x2 * y2),
    cross: ([x1, y1], [x2, y2]) => x1 * y2 - x2 * y1
};

console.log(vector.add([1, 1], [1, 0])); // [2, 1]
console.log(vector.multiply([3.5, -2], 2));  // [7, -4]
console.log(vector.length([3, -4]));             // 5
console.log(vector.dot([1, 0], [0, -1])); //0
console.log(vector.cross([3, 7], [1, 0])); // -7



