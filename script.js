const display = document.querySelector('#inputdisplay');
display.textContent = 0;

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', resetAll = () => {
    display.textContent = 0;
    newNumBtnValue = '';
    numBtnValue = '';
})

const backBtn = document.querySelector('#backBtn');
backBtn.addEventListener('click', removeBackDigit = () => {
    let currentText = display.textContent;
    let updatedText = currentText.substring(0, currentText.length - 1);
    display.textContent = updatedText;
    console.log(updatedText);
})

const equals = document.querySelector('#equals')

const numBtns = document.querySelectorAll('.numBtn');
const dot = document.querySelector('#dot');

let numBtnValue;
let newNumBtnValue = ''

const numBtn = numBtns.forEach(numBtn => numBtn.addEventListener('click' , getNumBtnValue = () => {
    numBtnValue = numBtn.value;
    newNumBtnValue += numBtnValue;
    display.textContent = newNumBtnValue;
}));

dot.addEventListener('click',  function disableDot() {
    if ((display.textContent).includes('.')) {
        dot.disabled = true;
    } 
}) 

const operators = {
    '+' : function(a,b) {return a+b},
    '-' : function(a,b) {return a-b},
    '*' : function(a,b) {return a*b},
    '/' : function(a,b) {return a/b; if(b === 0) return `Nah! nah!`},
    '%' : function(a,b) {return a/b * 100}
}

const operatorBtns = document.querySelectorAll('.operatorBtn');

let operator;

function Operation() {
    let firstNumber = '';
    let firstInput = '';
    let secondNumber = '';

    const operatorBtn = operatorBtns.forEach(operatorBtn => operatorBtn.addEventListener ('click' , getOperator = () => {
        firstInput = newNumBtnValue;
        newNumBtnValue = '';
        firstNumber = parseFloat(firstInput);
        operator = operatorBtn.value;
        console.log(firstNumber);
        dot.disabled = false;
        console.log(operator)
    }))

    equals.addEventListener('click', function operate() {
        secondInput = newNumBtnValue;
        secondNumber = parseFloat(secondInput);
        let Operation;
        
        if(!firstNumber || !operator || !secondNumber) {
            return Operation;
        } else if(!secondNumber) {
            Operation = operators[operator](firstNumber, firstNumber);
        } else {
            Operation = operators[operator](firstNumber,secondNumber);
        }

        display.textContent = Math.round(Operation * 1000) / 1000;
        newNumBtnValue = Math.round(Operation * 1000) / 1000;
        console.log(newNumBtnValue);
        return Operation;
    })
} 

Operation()