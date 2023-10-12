let display = document.querySelector('.display');
let displayValue = 0;
let operand1 = undefined;
let operand2 = undefined;
let operator = undefined;
let operatorClicked = false;
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
        operate(operand1, operand2, operator);
    })
}

function add(op1, op2){
    return op1 + op2;
}

function subtract(op1, op2){
    return op1 - op2;
}

function multiply(op1, op2){
    return op1 * op2;
}

function divide(op1, op2){
    if(op2 === 0){
        return "Stop that!";
    }
    else{
        return op1 / op2;
    }
}

function operate(op1, op2, operator){
    switch(operator){
        case '+':
            display.textContent = add(op1, op2);
            displayValue = display.textContent;
            break;
        case '-':
            display.textContent = subtract(op1, op2);
            displayValue = display.textContent;
            break;
        case '*':
            display.textContent = multiply(op1, op2);
            displayValue = display.textContent;
            break;
        case '/':
            display.textContent = divide(op1, op2);
            displayValue = display.textContent;
            break;
    }
}

function input(clicked){
    if(!isNaN(clicked)){
        if (displayValue === 0){
            display.textContent = clicked;
            displayValue = Number(display.textContent);
        }
        else if(operatorClicked){
            display.textContent = clicked;
            displayValue = clicked;
            operatorClicked = false;
        }
        else{
            display.textContent += clicked;
            displayValue = Number(display.textContent);
        }
    }
    else{
        operand1 = displayValue;
        operator = clicked;
    }
}

function clear(){
    displayValue = 0;
    operand1 = undefined;
    operand2 = undefined;
    display.textContent = 0;
}










/*function input(clicked){
    if(isNaN(clicked)){
        if(operatorClicked){
            eval[1] = clicked;
            return;
        }
        switch(clicked){
            case '+':
                operatorClicked = true;
                if(eval.length > 1){
                    eval.push(Number(display.textContent));
                    display.textContent = operate();                    
                    eval.push('+');
                }
                else{
                    eval.push(Number(display.textContent));
                    eval.push('+');
                }
                break;
            case '-':
                operatorClicked = true;
                if(eval.length > 1){
                    eval.push(Number(display.textContent));
                    display.textContent = operate();                    
                    eval.push('-');
                }
                else{
                    eval.push(Number(display.textContent));
                    eval.push('-');
                }
                break;
            case '*':
                operatorClicked = true;
                if(eval.length > 1){
                    eval.push(Number(display.textContent));
                    display.textContent = operate();                    
                    eval.push('*');
                }
                else{
                    eval.push(Number(display.textContent));
                    eval.push('*');
                }
                break;
            case '/':
                operatorClicked = true;
                if(eval.length > 1){
                    eval.push(Number(display.textContent));
                    display.textContent = operate();
                    eval.push('/');
                }
                else{
                    eval.push(Number(display.textContent));
                    eval.push('/');
                }
                break;
        }
    }
    else{
        if (display.textContent === '0') {
            display.textContent = clicked;
        }
        else if (operatorClicked){
            display.textContent = clicked;
            operatorClicked = false;
        }
        else {
            display.textContent += clicked;
        }
    }

}

function operate(){
    answer = undefined;
    switch (eval[1]){
        case '+':
            answer = eval[0] + eval[2];
            eval.length = 0;
            eval[0] = answer;
            return answer;
        case '-':
            answer = eval[0] - eval[2];
            eval.length = 0;
            eval[0] = answer;
            return answer;
        case '*':
            answer = eval[0] * eval[2];
            eval.length = 0;
            eval[0] = answer;
            return answer;
        case '/':
            if(eval[2] === 0){
                eval.length = 0;
                return "pls don't do that >:(";
            }
            answer = eval[0] / eval[2];
            eval.length = 0;
            eval[0] = answer;
            return answer;
    }
}

function clear(){
    eval.length = 0;
    display.textContent = 0;
}

function updateDisplay(value){
    if(value > 99999999){
        display.textContent = value.toExponential();
    }
    else{
        display.textContent = value;
    }
}*/
