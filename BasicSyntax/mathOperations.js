function math(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
        case '%':
            return a % b;
            break;
        case '**':
            return a ** b;
            break;
    }
}

console.log(math(10, 5, '+'));