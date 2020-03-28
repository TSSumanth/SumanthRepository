const defaultResult = 0;
let currentResult = defaultResult;
let calculationDescription = "0";
let logEntry = [];

function getuserInput() {
    return parseInt(userInput.value);
}

function getDescription(initialValue, operator, newValue) {
    calculationDescription =  `${initialValue} ${operator} ${newValue}`
    return calculationDescription
}

function enterLogs(operation, initialValue, newValue) {
    log = {
        "operation": operation,
        "initialValue": initialValue,
        "newValue": newValue,
        "finalvalue": currentResult
    };
    logEntry.push(log);
    console.log(log.operation);
    console.log(logEntry);
}

function add() {
    let initialvalue = currentResult;
    let newValue = getuserInput()
    currentResult = currentResult + newValue;
    outputResult(currentResult, getDescription(calculationDescription, "+", getuserInput()));
    enterLogs("ADD",initialvalue,newValue)
}

function subtract() {
    let initialvalue = currentResult;
    let newValue = getuserInput()
    currentResult = currentResult - newValue;
    outputResult(currentResult, getDescription(calculationDescription, "-", getuserInput()));
    enterLogs("SUBTRACT",initialvalue,newValue)
}

function Multiply() {
    let initialvalue = currentResult;
    let newValue = getuserInput()
    currentResult = currentResult * newValue;
    outputResult(currentResult, getDescription(calculationDescription, "*", getuserInput()));
    enterLogs("Multiply",initialvalue,newValue)
}

function Divide() {
    let initialvalue = currentResult;
    let newValue = getuserInput()
    currentResult = currentResult / newValue;
    outputResult(currentResult, getDescription(calculationDescription, "/", getuserInput()));
    enterLogs("Divide",initialvalue,newValue)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', Multiply);
divideBtn.addEventListener('click', Divide);