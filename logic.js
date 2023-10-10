let display = document.querySelector('.display')
main();

function main() {
    //let eval = [0];
    //operate(eval);
    let currentValue = 0;

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
    })
    const subtractButton = document.querySelector(".button-subtract");
    subtractButton.addEventListener('click', function (){
        input('-');
    })
    const multiplyButton = document.querySelector(".button-multiply");
    multiplyButton.addEventListener('click', function (){
        input('*');
    })
    const divideButton = document.querySelector(".button-divide");
    divideButton.addEventListener('click', function (){
        input('/');
    })
    const clearButton = document.querySelector(".button-clear");
    clearButton.addEventListener('click', function (){
        input('C');
    })
    const equalsButton = document.querySelector(".button-equals");
    equalsButton.addEventListener('click', function (){
        console.log("equals pressed");
    })
}

function input(clicked){
    console.log(display.textContent);
    if (display.textContent === '0') {
        display.textContent = clicked;
    }
    else {
        display.textContent += clicked;
    }
    currentValue = Number(display.textContent);
    console.log("currentValue = " + currentValue);
}

