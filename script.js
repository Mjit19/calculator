let num1, num2, operator, result;
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');

let lowerDisplay = document.querySelector('#lower-display');
let upperDisplay = document.querySelector('#upper-display');
let equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const point = document.querySelector('#point');

digits.forEach(digit => {
    digit.addEventListener('click', () => {
        if (lowerDisplay.textContent.length >= 16) {
            num1 = null;
            num2 = null;
            return lowerDisplay.textContent = "Error";
        }
        if(lowerDisplay.textContent === "Error" || result != null) {
            lowerDisplay.textContent = '';
            upperDisplay.textContent = '';
            result = null;
        }
        if (lowerDisplay.textContent != '0' || digit.textContent != '0'){
            lowerDisplay.textContent += digit.textContent;
        }
    })
});

operators.forEach(sign => {
    sign.addEventListener('click', () => {
        if (lowerDisplay.textContent === "Error") {
            upperDisplay.textContent = ''
            return lowerDisplay.textContent = "Error";
        }
        if (lowerDisplay.textContent != '') {
            num1 = Number(lowerDisplay.textContent);
            result = null;
        }
        operator = sign.textContent;
        upperDisplay.textContent = num1 + " " + operator + " ";
        lowerDisplay.textContent = "";
    })
})

equals.addEventListener('click', () => {
    if (num1 != null && lowerDisplay.textContent != '') {
        num2 = Number(lowerDisplay.textContent);
    }
    if(num2 == null) {
        upperDisplay.textContent = '';
        num1 = null;    // Sets num1 to null if num1 has value
        return lowerDisplay.textContent = "Error";
    }

    if (operator == "/" && num2 == 0) {
        upperDisplay.textContent = '';
        num1 = null;
        num2 = null;
        return lowerDisplay.textContent = "Error"
    }
    upperDisplay.textContent += " " + num2 + " = ";
    result = (Math.round(operate(operator, num1, num2) * 100) / 100).toString();
    
    if (result.length < 16) {
        lowerDisplay.textContent = result;
    } else {
        lowerDisplay.textContent = "Error";
    }
    num1 = null, num2 = null, operator = null;
    
})

clear.addEventListener('click', () => {
    upperDisplay.textContent = "";
    lowerDisplay.textContent = "";
    num1 = null, num2 = null, operator = null;
})

point.addEventListener('click', () => {
    if (!lowerDisplay.textContent.includes('.')) {
        if (lowerDisplay.textContent == '' || lowerDisplay.textContent == "Error") {
            lowerDisplay.textContent = "0";
        }
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