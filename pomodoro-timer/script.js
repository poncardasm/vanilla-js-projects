const timerDisplay = document.querySelector('.timer-display');
const btnStart = document.getElementById('start-btn');
const btnStop = document.getElementById('stop-btn');
const btnReset = document.getElementById('reset-btn');

let timeInterval;
let time = 0;

function startTimer() {
  timeInterval = setInterval(() => {
    time += 1;
    updateTimerDisplay();
  }, 1000);

  btnStart.disabled = true;
  btnStop.disabled = false;
  btnReset.disabled = false;
}

function updateTimerDisplay() {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  timerDisplay.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(value) {
  return value.toString().padStart(2, '0');
}

btnStart.addEventListener('click', startTimer);
btnStop.addEventListener('click', stopTimer);
btnReset.addEventListener('click', resetTimer);

resetTimer();
