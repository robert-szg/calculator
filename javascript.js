const numbers = document.querySelectorAll('.numbers');
const clear = document.querySelector('#clear');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');

let num1 = 0;
let num2 = 0;
let operator;

let result = 'null';
let input = 0;
let newOp;

function add(num1, num2){
    return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2){
    return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2){
    return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2){
    return parseInt(num1) / parseInt(num2);
}


function operate(firstNumber, secondNummber, operator){

    let result;

    switch (operator) {
        case '+':
            result = add(firstNumber, secondNummber);
            break;
    
        case '-':
            result = subtract(firstNumber, secondNummber);
            break;
            
        case 'x':
            result = multiply(firstNumber, secondNummber);
            break;
                
        case '/':
            result = divide(firstNumber, secondNummber);
            break;    
                    
        default:
            break;
        }
        
        return result;
}

function clearDisplay(){ 
    if(display){
        display.textContent = '';
    }
}

function clearNumbers(){
    num1 = 0;
    num2 = 0;
}

function inputNumber(num){
    if(display){
        display.textContent = display.textContent + num;
    }
}    



numbers.forEach(num => {
    num.addEventListener('click', () => {
        inputNumber(num.textContent);
    })
});

clear.addEventListener('click', () => {
    clearDisplay();
    result = 'null';
});

operators.forEach(op => {
    op.addEventListener('click', () => {
        num1 = parseInt(display.textContent);
        operator = op.textContent;


        if(result == 'null'){
            result = parseInt(display.textContent);
            newOp = op.textContent;
        }
        else{
            input = parseInt(display.textContent);
            result = operate(result, input, newOp);
            newOp = op.textContent;
        }

        clearDisplay();

        console.log(result);
        console.log(input);
        console.log(newOp);
    })
})

equals.addEventListener('click', () => {
    num2 = parseInt(display.textContent);

    input = parseInt(display.textContent);

    console.log(newOp);
    console.log(input);
    console.log(result);
    display.textContent = operate(result, input, newOp);
})



