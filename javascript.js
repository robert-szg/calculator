const numbers = document.querySelectorAll('.numbers');
const clear = document.querySelector('#clear');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');

let result = 'null';
let input = 0;
let operator;



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
        if(result == 'null'){
            result = parseInt(display.textContent);
            operator = op.textContent;
        }
        else{
            input = parseInt(display.textContent);
            result = operate(result, input, operator);
            operator = op.textContent;
        }
        clearDisplay(); 
    })
})

equals.addEventListener('click', () => {
    input = parseInt(display.textContent);
    display.textContent = operate(result, input, operator);
})



