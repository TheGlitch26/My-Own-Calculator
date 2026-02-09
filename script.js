//Welcome to my first manual(not fully automated) simple 4 operational(+ - * /) calculator.
//As you can see, this is my first time building a calculator without using ready, predefined functions like eval()
//The logic here is:
//When the user clicks numbered(1-9) buttons, program saves it to current value
//This process repeats untill the user clicks to any operation buttons(+ - * /)
//When this happens, program saves that input to previous value, resets the current, and is ready for new input
//And when the user clicks to equals(=) button, program chooses the right operation(+ - / *), and calculates the result

let currentValue = "";
let previousValue = "";
let operationValue = "";
let displayElement = document.querySelector(".display-box");

//Notice that i save values as string so that its easier to handle inputs


// Function to store entered values to the current value
function enterValue(value){
    currentValue += value;
    updateDisplay();
}

// Function for storing the written value to previous value so that we can enter new one, test cases, to see what situation are we in and move according to it.
//Example Test Cases to test and change code according to.

//Start                    initialization of first operation    current:0    prev:0    operation:0
//11 + 2 * 3 / 4           multiple operations case             current:1    prev:1    operation:1
//2 + 4 = 6   + 1          continuous operations case           current:0    prev:1    operation:1

function operation(value){
    //Case for initialization of calculation
    if(operationValue === ""){                                              
        operationValue = value;
        previousValue = currentValue;
        currentValue = "";
    }
    //Case for multiple operations
    else if(currentValue !== "" && previousValue !== ""){
        calculate();
        currentValue = "";
        operationValue = value;
    }
    //Case for continuous calculations
    else {
        operationValue = value;
    }
    displayElement.innerHTML = "";
}

//Separate functions for operations. 
//Notice that i have kept type convertion process till the calculation happens because i am working with strings during test cases and operation handling.
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


//Function to handle which operation function (add, divide or...) should work, and get ready for input
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
        previousValue = multiply();
        currentValue = ""; 
    }
    else if(operationValue === "/"){
        previousValue = divide();
        currentValue = ""; 
    }
    updateDisplay();
    return previousValue;
}

//Function to change what user sees on the screen
//User would like to see the result after a calculation happens. And the value that has been typed as they enter the values
function updateDisplay(){
    if(currentValue === ""){
        displayElement.innerHTML = previousValue;
    }
    else {
        displayElement.innerHTML = currentValue;
    }
}

//Simple function to set all values to initial states for a fresh restart
function clearValues(){
    currentValue = "";
    previousValue = "";
    operationValue = "";
    displayElement.innerHTML = "";
}
