window.onload = function () {
    const minutes = document.getElementById("minutes");
    const tens = document.getElementById("tens");
    const seconds = document.getElementById("seconds");

    const startBtn = document.getElementById("start-btn");
    const stopBtn = document.getElementById("stop-btn");
    const resetBtn = document.getElementById("reset-btn");
    let minutesSet = 00;
    let secondsSet = 00;
    let tensSet = 00;
    let Interval;

    startBtn.onclick = function () {
        Interval = setInterval(startTimer, 10);
    }
};

// Create start timer function

function startTimer() {
    tens++;
};