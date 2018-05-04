function addEventListenersToNumbers() {
    let numbers = document.getElementsByClassName("button four columns number");
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
