const buttonEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonEl.length; i++) {
    buttonEl[i].addEventListener("click", () => {
        const buttonValue = buttonEl[i].textContent;
        if(buttonValue === "C") {
            clearResult();
        } else if (buttonValue === "=") {
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    })
}


function clearResult() {
    inputFieldEl.value = "";
}

function calculateResult() {
    inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(value) {
    inputFieldEl.value += value;
}

document.addEventListener("keypress", (event)=> {
    const keyVal = event.key;
    console.log(keyVal);
    if (keyVal === "c" || keyVal === "C") {
        clearResult();
    } else if (keyVal === "=" || keyVal === "Enter") {
        calculateResult();
    } else if(keyVal.match(/^([0-9]|[.*/+-])$/)) {
        appendValue(keyVal);
    }
})
