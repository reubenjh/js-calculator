document.addEventListener('DOMContentLoaded', initCalc)



function initCalc() {
    addListenersToNumbers();
    // addListenersToFunctions();
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
    document.getElementById("answer").value = event.target.innerHTML;
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