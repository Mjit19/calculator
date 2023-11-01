let num1, num2, operator;
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');

let lowerDisplay = document.querySelector('#lower-display');
let upperDisplay = document.querySelector('#upper-display');
let equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');

digits.forEach(digit => {
    digit.addEventListener('click', () => {
        lowerDisplay.textContent += digit.textContent;
    })
});

operators.forEach(sign => {
    sign.addEventListener('click', () => {
        upperDisplay.textContent += lowerDisplay.textContent + " " + sign.textContent + " ";
        num1 = Number(lowerDisplay.textContent);
        operator = sign.textContent;
        lowerDisplay.textContent = "";
    })
})

equals.addEventListener('click', () => {
    num2 = Number(lowerDisplay.textContent);
    if(num1 === undefined) {
        lowerDisplay.textContent = "Error";
    }
    upperDisplay.textContent += " " + num2 + " = ";
    lowerDisplay.textContent = Math.round(operate(operator, num1, num2) * 100) / 100;
})

clear.addEventListener('click', () => {
    upperDisplay.textContent = "";
    lowerDisplay.textContent = "";
    num1 = undefined, num2 = undefined, operator = undefined;
})

function operate(sign, a, b) {
    if (sign == "+") {
        return add(a, b);
    } else if (sign == "-") {
        return subtract(a, b);
    } else if (sign == "*") {
        return multiply(a, b);
    } else if (sign == "/") {
        return divide(a, b);
    }
    
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}