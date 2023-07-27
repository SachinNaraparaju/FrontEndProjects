const startEl = document.getElementById("start");
const resetEl = document.getElementById("reset");
const stopEl = document.getElementById("stop");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1500;


function updateTime() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2,"0")}`;
    console.log(formattedTime);
    timerEl.innerHTML = formattedTime;
}

function startTimer() {
    interval = setInterval(()=> {
        timeLeft--;
        updateTime();
        if(timeLeft === 0) {
            clearInterval(interval);
            alert("Time's Up!");
            timeLeft = 1500;
        }
    }, 1000);
    startEl.disabled = true;
    stopEl.disabled = false;
}
function stopTimer() {
    clearInterval(interval);

    startEl.disabled = false;
    stopEl.disabled = true;
}
function resetTimer() {
    stopTimer();
    timeLeft = 1500;
    updateTime();
}


startEl.addEventListener("click",() => {
    startTimer();
});
stopEl.addEventListener("click",() => {
    stopTimer();
});
resetEl.addEventListener("click",() => {
    resetTimer();
});
