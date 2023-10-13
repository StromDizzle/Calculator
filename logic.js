let display = document.querySelector('.display');
let displayValue = 0;
let operand1 = undefined;
let operand2 = undefined;
let operator1 = undefined;
let operator2 = undefined;
let operatorClicked = false;
let lastClicked = undefined;
main();

function main() {
    const zeroButton = document.querySelector(".button-0");
    zeroButton.addEventListener('click', function (){
        input(0);
    })
    const oneButton = document.querySelector(".button-1");
    oneButton.addEventListener('click', function (){
        input(1);
    })
    const twoButton = document.querySelector(".button-2");
    twoButton.addEventListener('click', function (){
        input(2);
    })
    const threeButton = document.querySelector(".button-3");
    threeButton.addEventListener('click', function (){
        input(3);
    })
    const fourButton = document.querySelector(".button-4");
    fourButton.addEventListener('click', function (){
        input(4);
    })
    const fiveButton = document.querySelector(".button-5");
    fiveButton.addEventListener('click', function (){
        input(5);
    })
    const sixButton = document.querySelector(".button-6");
    sixButton.addEventListener('click', function (){
        input(6);
    })
    const sevenButton = document.querySelector(".button-7");
    sevenButton.addEventListener('click', function (){
        input(7);
    })
    const eightButton = document.querySelector(".button-8");
    eightButton.addEventListener('click', function (){
        input(8);
    })
    const nineButton = document.querySelector(".button-9");
    nineButton.addEventListener('click', function (){
        input(9);
    })
    const addButton = document.querySelector(".button-add");
    addButton.addEventListener('click', function (){
        input('+');
        operatorClicked = true;
    })
    const subtractButton = document.querySelector(".button-subtract");
    subtractButton.addEventListener('click', function (){
        input('-');
        operatorClicked = true;
    })
    const multiplyButton = document.querySelector(".button-multiply");
    multiplyButton.addEventListener('click', function (){
        input('*');
        operatorClicked = true;
    })
    const divideButton = document.querySelector(".button-divide");
    divideButton.addEventListener('click', function (){
        input('/');
        operatorClicked = true;
    })
    const clearButton = document.querySelector(".button-clear");
    clearButton.addEventListener('click', function (){
        clear();
    })
    const equalsButton = document.querySelector(".button-equals");
    equalsButton.addEventListener('click', function (){
        operand2 = displayValue;
        if(isNaN(lastClicked)){
            operand2 = undefined;
            return;
        }
        operate(operand1, operand2, operator1);
        operand2 = undefined;
        operator1 = undefined;
    })
}

function add(op1, op2){
    if(operator2 != undefined){        
        operator1 = operator2;
        operator2 = undefined;
        operand1 = op1 + op2;
        return operand1;
    }
    else{
        operand1 = op1 + op2;
        return operand1;
    }
}

function subtract(op1, op2){
    if(operator2 != undefined){        
        operator1 = operator2;
        operator2 = undefined;
        operand1 = op1 - op2;
        return operand1;
    }
    else{
        operand1 = op1 - op2;
        return operand1;
    }
}

function multiply(op1, op2){
    if(operator2 != undefined){        
        operator1 = operator2;
        operator2 = undefined;
        operand1 = op1 * op2;
        return operand1;
    }
    else{
        operand1 = op1 * op2;
        return operand1;
    }
}

function divide(op1, op2){
    if(op2 === 0){
        operand1 = undefined;
        operand2 = undefined;
        operator1 = undefined;
        operator2 = undefined;
        return "Stop that!";
    }
    if(operator2 != undefined){        
        operator1 = operator2;
        operator2 = undefined;
        operand1 = op1 / op2;
        return operand1;
    }
    else{
        operand1 = op1 / op2;
        return operand1;
    }
}

function operate(op1, op2, symbol){
    switch(symbol){
        case '+':
            updateDisplay(add(op1, op2));
            displayValue = Number(display.textContent);
            break;
        case '-':
            updateDisplay(subtract(op1, op2));
            displayValue = Number(display.textContent);
            break;
        case '*':
            updateDisplay(multiply(op1, op2));
            displayValue = Number(display.textContent);
            break;
        case '/':
            updateDisplay(divide(op1, op2));
            displayValue = Number(display.textContent);
            break;
    }
    operator = undefined;
    operatorClicked = true;
}

function input(clicked){
    if(!isNaN(clicked)){
        if (displayValue === 0){
            updateDisplay(clicked);
            displayValue = clicked;
        }
        else if(operatorClicked){
            updateDisplay(clicked);
            displayValue = clicked;
            operatorClicked = false;
        }
        else{
            display.textContent += clicked;
            displayValue = Number(display.textContent);
        }
    }
    else{
        if(isNaN(lastClicked)){
            if(operator2 === undefined){
                operator1 = clicked;
            }
            else{
                operator2 = clicked;
            }
        }
        else if(operator1 === undefined){
            operand1 = displayValue;
            operator1 = clicked;
        }
        else{
            operator2 = clicked;
            operand2 = displayValue;
            operate(operand1, operand2, operator1);
        }
    }
    lastClicked = clicked;
}

function clear(){
    displayValue = 0;
    operand1 = undefined;
    operand2 = undefined;
    operator1 = undefined;
    operator2 = undefined;
    updateDisplay(0);
}

function updateDisplay(value){
    if(value > 999999999){
        display.textContent = value.toExponential(4);
    }
    else{
        display.textContent = value;
    }
}
