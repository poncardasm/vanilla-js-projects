const countdownForm = document.getElementById('countdownForm');
const targetDateInput = document.getElementById('targetDate');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

countdownForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const targetDate = new Date(targetDateInput.value);

  const intervalId = setInterval(() => {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the display
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;

    if (timeDifference < 0) {
      clearInterval(intervalId);
      // Assuming you have a countdown container, otherwise adjust the selector
      document.getElementById('countdown').textContent = "Time's Up!";
    }
  }, 1000); // Update every second
});
