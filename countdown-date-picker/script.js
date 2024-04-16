const countdownDisplay = document.getElementById('countdown-display');
const startCountdownBtn = document.getElementById('start-countdown');

let countdownInterval;

function startCountdown() {
  const countdownDate = new Date(
    document.getElementById('countdown-date').value,
  );
  const currentDate = new Date();

  if (countdownDate < currentDate) {
    countdownDisplay.textContent = 'Invalid date. Please enter a future date.';
    return;
  }

  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    const currentTime = new Date().getTime();

    const totalSeconds = (countdownDate - currentTime) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    countdownDisplay.textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

    if (totalSeconds < 0) {
      clearInterval(countdownInterval);
      countdownDisplay.textContent = 'Countdown finished!';
    }
  }, 1000);
}

startCountdownBtn.addEventListener('click', startCountdown);
