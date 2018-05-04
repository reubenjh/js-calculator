document.addEventListener('DOMContentLoaded', initCalc)

let firstNum = '';
let secondNum = '';
let arfunc = '';

function initCalc() {
    addListenersToNumbers();
    addListenersToFunctions();
    // addListenersToClears();
    // addListenersToEquals();
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
    arfunc = event.target.innerHTML;
    document.getElementById("answer").value = firstNum + ' ' + arfunc;
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