let display = document.getElementById('display');
let currentInput = '';
let operatorClicked = false;
let lastInput = '';

function inputValue(value) {
    // Prevent entering multiple operators consecutively
    if (isOperator(value) && isOperator(lastInput)) {
        return;
    }

    if (operatorClicked && !isOperator(value)) {
        currentInput = '';
        operatorClicked = false;
    }

    currentInput += value;
    display.textContent = currentInput;
    lastInput = value;
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
    lastInput = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '0';
    lastInput = currentInput.slice(-1);
}

function calculateResult() {
    try {
        const result = new Function('return ' + currentInput)();
        currentInput = result.toString();
        display.textContent = currentInput;
    } catch (e) {
        display.textContent = 'Error';
        currentInput = '';
    }
    operatorClicked = true;
    lastInput = '';
}

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}
