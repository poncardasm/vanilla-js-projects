const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const mainTitle = document.querySelector('h1');

const setDate = '10 April 2024';
const countdownDate = new Date(setDate);

function countdown() {
  const currentDate = new Date();

  const totalSeconds = (countdownDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  // Update the display
  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

const formattedDate = `${countdownDate.toLocaleString('default', {
  month: 'long',
})} ${countdownDate.getDate()}, ${countdownDate.getFullYear()}`;
mainTitle.innerText = `Countdown to ${formattedDate}`;

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Initial call so it doesn't start at 00
countdown();

// Update the timer every second
setInterval(countdown, 1000);
