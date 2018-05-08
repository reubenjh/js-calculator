document.addEventListener('DOMContentLoaded', start)

// Variables
let firstNum = ''
let secondNum = ''
let arfunc = ''
let ans = ''
let entries = []
let history = ''





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
/*********** cross this bridge when we come to it

        if (ans != '') {
            firstNum = ans
            secondNum
        } else 

***********/
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
        // Setting history
        setHist()
    }
}

function addListenersToEquals() {
    document.getElementsByClassName('equals')[0].addEventListener('click', eqClick);
    console.log('added listener to quals')
}

function eqClick() {
    // Error handling people clicking equals with no firstNum
    if (firstNum == '') {
        return;
    }    
/*************** Cross this bridge later...

    // If no arfunc yet, print firstNum to history
    } else if (arfunc == '' && secondNum == '') {
        entries.push(firstNum)
        for (let i = 0; i < entries.length; i++) {
            history += entries[i] + ''
        }
        document.getElementById("history").value = history;
        firstNum = '';
    }

****************/

/*************** Cross this bridge later...

    // Have firstNum and arfunc only
    // will this error when people press equals again after doing the above?
    else if (firstNum != '' && arfunc != '' && secondNum == '') {
        entries.push(firstNum)
        entries.push(arfunc)
        for (let i = 0; i < entries.length; i++) {
            history += entries[i] + ''
        }
        document.getElementById("history").value = history;
    }

****************/
    else if (secondNum != '') {
        ans = calculate(firstNum, secondNum, arfunc)
        document.getElementById("display").value = ans
        entries.push(secondNum)
        setHist()
        clearVars(firstNum, secondNum, arfunc)
    }
}







function setHist() {
    let newHist = ''
    for (let i = 0; i < entries.length; i++) {
        newHist += entries[i] + ' '
    }
    history = newHist
    document.getElementById("history").value = history;
}

function clearVars (a, b, c, d, e, f) {
    a = ''
    b = ''
    c = ''
    d = ''
    e = ''
    f = ''
}

function calculate(firstNum, secondNum, arfunc){
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
    document.getElementsByClassName('clear')[0].addEventListener('click', clearEntryClick);
    document.getElementsByClassName('clear')[1].addEventListener('click', allClearClick);
}


function allClearClick() {
    clearVars(firstNum, secondNum, arfunc, history, ans,)
    entries = []
    document.getElementById("display").value = '';
    document.getElementById("history").value = '';
}

function clearEntryClick() {
    // definitely needs work
    clearVars(secondNum)
    document.getElementById("display").value = '';
}






