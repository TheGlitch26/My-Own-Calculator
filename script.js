let currentValue = "";
let previousValue = "";
let operationValue = "";
let displayElement = document.querySelector(".display-box");

//11+2*3/4

function enterValue(value){
    currentValue += value;
    updateDisplay();
}

function operation(value){
    if(operationValue === ""){
        operationValue = value;
        previousValue = currentValue;
        currentValue = "";
    }
    else {
        previousValue = calculate();
        currentValue = "";
        operationValue = value;
    }
    displayElement.innerHTML = "";
}

function add(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    return previousValue + currentValue;
}
function subtract(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    return previousValue - currentValue;
}
function multiply(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    return previousValue * currentValue;
}
function divide(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    return previousValue / currentValue;
}


function calculate(){
    console.log("Prev:", previousValue, "Op:", operationValue, "Curr:", currentValue);
    if(operationValue === "+"){
        previousValue = add();
        currentValue = "";    
    }
    else if(operationValue === "-"){
        previousValue = subtract();
        currentValue = ""; 
    }
    else if(operationValue === "*"){
        currentValue = ""; 
    }
    else if(operationValue === "/"){
        previousValue = divide();
        currentValue = ""; 
    }
    return previousValue;
    updateDisplay();
}

function updateDisplay(){
    if(currentValue === ""){
        displayElement.innerHTML = previousValue;
    }
    else {
        displayElement.innerHTML = currentValue;
    }
}

function clearValues(){
    currentValue = "";
    previousValue = "";
    operationValue = "";
    displayElement.innerHTML = "";
}
