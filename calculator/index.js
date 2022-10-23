function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function operate(x, y, operator) {
    let result;
    switch (operator) {
        case '+':
            result = addition(x, y);
            break;
        case '-':
            result = subtraction(x, y);
            break;
        case '*':
            result = multiplication(x, y);
            break;
        case '/':
            result = division(x, y);
            if (!Number.isInteger(result)) result = result.toFixed(2);
            return result;
    }
    document.querySelector('#input').setAttribute('value', result);
    num1 = result;
    inputString = result.toString();
}

function toggle_btn(val) {
    let idvalue = val;
    if (val == '+') idvalue = 'plus';
    if (val == '-') idvalue = 'minus';
    if (val == '*') idvalue = 'multiply';
    if (val == '/') idvalue = 'divide';
    if (val == 'AC') {
        document.querySelectorAll(".hl").forEach(clr => { clr.classList.remove('hl') });
        return;
    }
    document.getElementById(idvalue).classList.toggle("hl");
}

let count = false;
let inputString = '';
let num1 = 0;
let num2 = 0;
let operator = 0;

function input(val) {
    if (val == '+' || val == '-' || val == '*' || val == '/') {
        if (count == false) {
            document.querySelector('#input').setAttribute('value', '');
            document.querySelector('#dot').disabled = false;
            operator = val;
            num1 = parseFloat(inputString);
            toggle_btn(val);
            inputString = '';
            count = true;
        }
        else {
            toggle_btn(operator);
            num2 = parseFloat(inputString);
            operate(num1, num2, operator);
            document.querySelector('#dot').disabled = false;
            decimal = false;
            inputString = '';
            operator = val;
            toggle_btn(operator);
        }
    }
    else if (val == '=') {
        toggle_btn(operator);
        num2 = parseFloat(inputString);
        operate(num1, num2, operator);
        document.querySelector('#dot').disabled = false;
        decimal = false;
        count = false;
    }
    else if (val == 'AC') {
        document.querySelector('#input').setAttribute('value', '0');
        document.querySelector('#dot').disabled = false;
        toggle_btn(val);
        inputString = '';
        num1 = 0;
        num2 = 0;
        operator = 0;
        count = false;
    }
    else if (val == 'C') {
        inputString = inputString.slice(0, -1);
        document.querySelector('#input').setAttribute('value', inputString);
    }
    else {
        if (val == undefined) val = '.';
        inputString += val;
        document.querySelector('#input').setAttribute('value', inputString);
        if (val == '.') {
            document.querySelector('#dot').disabled = true;
        }
    }
}

const btn = document.querySelectorAll('button')
btn.forEach(button => {
    button.addEventListener('click', function (e) { input(e.target.value) })
})

// Event Listener for keyboard button press
document.addEventListener('keydown', (event) => {
    let operators = {
        '/': 'divide',
        'x': 'multiply',
        '*': 'multiply',
        '+': 'plus',
        '-': 'minus'
    }

    if(!isNaN(event.key) && event.key !== ' '){
        document.getElementById(`block${event.key}`).click();
    }
    if (['/', 'x', '+', '-', '*'].includes(event.key)) {
        document.getElementById(operators[event.key]).click();
    }
    if (event.key === 'Backspace') {
        document.getElementById('backspace').click();	
    }
    if (event.key === '=' || event.key === 'Enter') {
        document.getElementById('ans').click();	
    }
    if (event.key === '.') {
        document.getElementById('dot').click();	
    }
    if (event.key === 'Delete') {
        document.getElementById('clr').click();
    }
});