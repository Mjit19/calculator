let num1, num2, operator;
const buttons = document.querySelectorAll('button');
let display = document.querySelector('#display');

buttons.forEach(digit => {
    digit.addEventListener('click', (event) => {
        const target = event.target;
        display.textContent = digit.textContent;
        console.log(target);
    })
});

const zero = document.querySelector('#zero');

console.log(zero.textContent);
console.log(typeof (Number(zero.textContent)));

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
    return (a + b).toFixed(2);
}

function subtract(a, b) {
    return (a - b).toFixed(2);
}

function multiply(a, b) {
    return (a * b).toFixed(2);
}

function divide(a, b) {
    return (a / b).toFixed(2);
}