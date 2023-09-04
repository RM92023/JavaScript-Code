const performOperation = (operation) => {
    const number1 = +document.getElementById('number1').value;
    const number2 = +document.getElementById('number2').value;
    const result = +document.getElementById('result').value;

    let calculationResult;

    switch (operation) {
        case 'sum':
            calculationResult = number1 + number2;
            break;
        case 'sub':
            calculationResult = number1 - number2;
            break;
        case 'mul':
            calculationResult = number1 * number2;
            break;
        case 'div':
            if (number2 === 0) {
                showResult('Error: División por 0');
                return;
            }
            calculationResult = number1 / number2;
            break;
        case 'sqr':
            calculationResult = Math.sqrt(number2);
            break;
        case 'pow':
            calculationResult = Math.pow(number1, number2);
            break;
        case 'abs':
            calculationResult = Math.abs(number2);
            break;
        case 'rdm':
            const min = number1;
            const max = number2 + 1;
            calculationResult = Math.floor(Math.random() * (max - min) + min);
            break;
        case 'rnd':
            calculationResult = Math.round(result);
            break;
        case 'flr':
            calculationResult = Math.floor(result);
            break;
        case 'cil':
            calculationResult = Math.ceil(result);
            break;
        default:
            return;
    }

    showResult(calculationResult);
};

const showResult = (result) => {
    document.getElementById('result').value = result;
};
