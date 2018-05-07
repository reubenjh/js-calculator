document.addEventListener('DOMContentLoaded', start)

// Variables
let firstNum = ''
let secondNum = ''
let arfunc = ''
let ans = ''
let entries = []
let history = ''
let display = ''

function start() {
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

function numClick() {
    if (arfunc == '') {
        // need an if statement here to handle that weird situation when clear is needed on history and for firstNum to refresh
        firstNum += event.target.innerHTML;
        document.getElementById("display").value = firstNum;
    } else {
        secondNum += event.target.innerHTML;
        document.getElementById("display").value = secondNum;
    }
}

function addListenersToFunctions() {
    let functions = document.getElementsByClassName("function");
    for (let i = 0; i < functions.length; i++) {
        functions[i].addEventListener("click", funcClick);
    }
}

function funcClick() {
    // Error handling people clicking an arfunc with no firstNum
    if (firstNum == '') {
        return;
    }

    if (arfunc == '') {
        arfunc = event.target.innerHTML;
        entries.push(firstNum)
        entries.push(arfunc)
        for (let i = 0; i < entries.length; i++) {
            history += entries[i] + ''
        }
        document.getElementById("history").value = history;
    }
        // more options needed
}    

function addListenersToEquals() {
    document.getElementsByClassName('equals')[0].addEventListener('click', eqClick);
}

function eqClick() {
    // Error handling people clicking equals with no firstNum
    if (firstNum == '') {
        return;

    // If no arfunc yet, print firstNum to history
    } else if (arfunc == '' && secondNum == '') {
        entries.push(firstNum)
        for (let i = 0; i < entries.length; i++) {
            history += entries[i] + ''
        }
        document.getElementById("history").value = history;
        firstNum = '';
    }

    // Have firstNum and arfunc only
    // will this error when people press equals again after doing the above?
    else if (secondNum == '') {
        entries.push(firstNum)
        entries.push(arfunc)
        for (let i = 0; i < entries.length; i++) {
            history += entries[i] + ''
        }
        document.getElementById("history").value = history;

    } else {
        // do the calculation
    }


}
// come back to this
/* function calculate(firstNum,secondNum, arfunc){
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
*/

function addListenersToClears() {
    document.getElementsByClassName('clear')[0].addEventListener('click', clearEntryClick);
    document.getElementsByClassName('clear')[1].addEventListener('click', allClearClick);
}

// Come back to this
/* 
function allClearClick(){
    firstNum = '';
    secondNum = '';
    arfunc = '';
    document.getElementById("answer").value = '';
    //document.getElementById("history").value = '';

}

function clearEntryClick(){
    secondNum = '';
    document.getElementById("answer").value = '';
    //possibly clear arfunc?
}
*/





