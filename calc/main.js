document.addEventListener('DOMContentLoaded', initCalc)

let firstNum = '';
let secondNum = '';
let arfunc = '';
let eqPressed = false;

function initCalc() {
    addListenersToNumbers();
    addListenersToFunctions();
    addListenersToClears();
    addListenersToEquals();
}

function addListenersToNumbers() { 
    let numbers = document.getElementsByClassName("number");
    
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", numClick);
    }
}

function setFirstNum(newNum){
    firstNum = newNum;
    document.getElementById("answer").value = firstNum;
}



function numClick() {
    
    if (arfunc == ''){
        if (eqPressed){
            setFirstNum(event.target.innerHTML); 
            //Because equals has been pressed, this is a case where we want to start a new calculation, not append a number to an existing number. 
            eqPressed = false;
        } else {
            firstNum += event.target.innerHTML;
            document.getElementById("answer").value = firstNum;
        }

    } else {
        secondNum += event.target.innerHTML;
        document.getElementById("answer").value = secondNum;
    }


}

function addListenersToFunctions() {
    let functions = document.getElementsByClassName("function");
    for (let i = 0; i < functions.length; i++) {
        functions[i].addEventListener("click", funcClick);
    }
}

function funcClick() {

    if (secondNum != ''){
        setFirstNum(calculate(firstNum,secondNum, arfunc));
        secondNum = '';
    } 
    
    arfunc = event.target.innerHTML;
     
}    

function addListenersToEquals() {
    document.getElementsByClassName('equals')[0].addEventListener('click',eqClick);
}

function eqClick(){
    eqPressed = true;
    if (arfunc != '' && firstNum != '' && secondNum != ''){
        setFirstNum(calculate(firstNum,secondNum, arfunc));
        secondNum = '';
        arfunc = '';
    }
}

function calculate(firstNum,secondNum, arfunc){
    switch (arfunc) {
        case '+':
            return Number(firstNum)+Number(secondNum);
            break;
        case '-':
            return Number(firstNum)-Number(secondNum);
            break;
        case 'X':
            return Number(firstNum)*Number(secondNum);
            break;
        case '/':
            return Number(firstNum)/Number(secondNum);
            break;
    }
}

function addListenersToClears() {
    document.getElementsByClassName('clear')[0].addEventListener('click', allClearClick);
    document.getElementsByClassName('clear')[1].addEventListener('click', clearEntryClick);
}

function allClearClick(){
    setFirstNum('');
    secondNum = '';
    arfunc = '';
    
}


function clearEntryClick(){
    secondNum = '';
    document.getElementById("answer").value = '';
}