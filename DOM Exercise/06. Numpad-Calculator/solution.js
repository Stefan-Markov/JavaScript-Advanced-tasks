function solve() {
    let expresion = document.getElementById('expressionOutput');
    let result = document.getElementById('resultOutput');

    document.querySelector('.keys').addEventListener('click', calculate);
    document.querySelector('.clear').addEventListener('click', clear);

    function clear() {
        expresion.textContent = '';
        result.textContent = '';
    }

    function calculate(event) {

        let button = event.target.value;
        switch (button) {
            case '/':
            case '*':
            case '+':
            case '-':
                expresion.textContent += ` ${button} `;
                break;
            case "=":
                let [leftOperand, operator, rightOperand] = expresion.textContent.split(" ");

                leftOperand = Number(leftOperand);
                rightOperand = Number(rightOperand);

                if (!(rightOperand || operator)) {
                    result.textContent = 'NaN';
                } else {
                    switch (operator) {
                        case"*":
                            return result.textContent = leftOperand * rightOperand;

                        case"-":
                            return result.textContent = leftOperand - rightOperand;

                        case"/":
                            return result.textContent = leftOperand / rightOperand;

                        case"+":
                            return result.textContent = leftOperand + rightOperand;
                    }
                }
                break;
            default:
                return expresion.textContent += button;
        }
    }
}