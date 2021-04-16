function fibonacci() {

    let currentNum = 0;
    let nextNum = 1;

    return () => {
        let fibNum = currentNum + nextNum;
        currentNum = nextNum;
        nextNum = fibNum;
        return currentNum;
    }
}


function solve() {
    let fib = fibonacci();
    console.log(fib());
    console.log(fib());
    console.log(fib());
    console.log(fib());
    console.log(fib());
    console.log(fib());
    console.log(fib());
}

solve();