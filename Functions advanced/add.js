function solution(a) {
    return function (b) {
        return a + b;
    }
}

let add = solution(5);
console.log(add(2)); // 7
console.log(add(3));// 8

let add7 = solution(7);
console.log(add7(2)); //9
console.log(add7(3)); //10
