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
    if (tensSet < 9) {
        tens.innerHTML = "0" + tens;
    }
    if (tensSet > 9) tens.innerHTML = tensSet;
    
    if (tensSet > 99) {
        secondsSet++;
        seconds.innerHTML = "0" + secondsSet;
        tensSet = 0;
        tens.innerHTML = "0" + 0;
    }
    if (secondsSet == 60) {
        minutesSet++;
        minutes.innerHTML='0'
    }
};