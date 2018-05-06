document.addEventListener('DOMContentLoaded', initCalc)
/*
    To dos:
    - get history working correctly.
    - add clear functionality
    - pretty CSS styling
    - secret hidden willem defoe boobies.
*/
let firstNum = '';
let secondNum = '';
let arfunc = '';

function initCalc() {
    addListenersToNumbers();
    addListenersToFunctions();
    addListenersToClears();
    addListenersToEquals();
}

function addListenersToNumbers() {
    let numbers = document.getElementsByClassName("number");
    console.log(numbers);
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", numClick);
        console.log("Adding to " + i)
    }
}

function numClick() {
    
    if (arfunc == ''){
        firstNum += event.target.innerHTML;
        document.getElementById("answer").value = firstNum;
    } else {
        secondNum += event.target.innerHTML;
        document.getElementById("answer").value = firstNum +' '+arfunc+' '+secondNum;
        document.getElementById('history').value += event.target.innerHTML;
    }


}

function addListenersToFunctions() {
    let functions = document.getElementsByClassName("function");
        console.log(functions);
    for (let i = 0; i < functions.length; i++) {
        functions[i].addEventListener("click", funcClick);
        console.log("Adding to " + i)
    }
}

function funcClick() {

    if (arfunc == ''){
        arfunc = event.target.innerHTML;
        document.getElementById("answer").value = firstNum + ' ' + arfunc;
        document.getElementById("history").value = firstNum + ' ' + arfunc;
    } else {
        document.getElementById("history").value += secondNum + '=';
        firstNum = calculate(firstNum,secondNum, arfunc);
        document.getElementById("answer").value = firstNum;
        secondNum = '';
        arfunc = event.target.innerHTML; //either this line or below, not both
        //arfunc = '';
    }

}    

function addListenersToEquals() {
    document.getElementsByClassName('equals')[0].addEventListener('click',eqClick);
}

function eqClick(){
    document.getElementById("history").value = firstNum + ' ' + arfunc + ' '+ secondNum + '=';
    firstNum = calculate(firstNum,secondNum, arfunc);
    document.getElementById("answer").value = firstNum;
    secondNum = '';
    arfunc = '';
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
    firstNum = '';
    secondNum = '';
    arfunc = '';
    document.getElementById("answer").value = '';
    document.getElementById("history").value = '';

}


function clearEntryClick(){
    secondNum = '';
    document.getElementById("answer").value = '';
    //possibly clear arfunc?
}





/*
function addEventListenersToNumbers() {
    let numbers = document.getElementsByClassName("number");
    console.log(numbers);
    for (let i of numbers) {
        i.addEventListener("click", numberClick);
        console.log("adding a listener to" + i);
    }
}

function numberClick() {
    alert("you clicked");
}

addEventListenersToNumbers();
*/