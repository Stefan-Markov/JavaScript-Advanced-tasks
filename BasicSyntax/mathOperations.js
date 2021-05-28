function math(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;

        case '-':
            return a - b;

        case '*':
            return a * b;

        case '/':
            return a / b;

        case '%':
            return a % b;

        case '**':
            return a ** b;

    }
}

console.log(math(10, 5, '+'));