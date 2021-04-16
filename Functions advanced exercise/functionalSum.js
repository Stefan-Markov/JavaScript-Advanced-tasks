function add(number) {
    let total = number;

    function add(num) {
        total += num;
        return add;
    }

    add.toString = () => {
        return total;
    }
    return add;
}

console.log((Number(add(1)))); // 1
console.log(Number(add(1)(6)(-3))); // 4