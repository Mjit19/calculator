let num1, num2, operator;
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');

let lowerDisplay = document.querySelector('#lower-display');
let upperDisplay = document.querySelector('#upper-display');
let equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const point = document.querySelector('#point');

digits.forEach(digit => {
    digit.addEventListener('click', () => {
        if(lowerDisplay.textContent === "Error") {
            lowerDisplay.textContent = '';
            upperDisplay.textContent = '';
        }
        lowerDisplay.textContent += digit.textContent;
    })
});

operators.forEach(sign => {
    sign.addEventListener('click', () => {
        if (lowerDisplay.textContent === "Error") {
            return lowerDisplay.textContent = "Error";
        }
        upperDisplay.textContent += lowerDisplay.textContent + " " + sign.textContent + " ";
        if (lowerDisplay.textContent != '') {
            num1 = Number(lowerDisplay.textContent);
        }
        operator = sign.textContent;
        lowerDisplay.textContent = "";
    })
})

equals.addEventListener('click', () => {
    if (num1 != undefined && lowerDisplay.textContent != '') {
        num2 = Number(lowerDisplay.textContent);
    }
    if(num1 === undefined || num2 === undefined) {
        upperDisplay.textContent = '';
        return lowerDisplay.textContent = "Error";
    }

    if (operator === "/" && num2 === 0) {
        return lowerDisplay.textContent = "Lol nub!"
    }
    upperDisplay.textContent += " " + num2 + " = ";
    lowerDisplay.textContent = Math.round(operate(operator, num1, num2) * 100) / 100;
    num1 = undefined, num2 = undefined, operator = undefined;
    
})

clear.addEventListener('click', () => {
    upperDisplay.textContent = "";
    lowerDisplay.textContent = "";
    num1 = undefined, num2 = undefined, operator = undefined;
})

point.addEventListener('click', () => {
    if (!lowerDisplay.textContent.includes('.')) {
        lowerDisplay.textContent += '.';
    }
});

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