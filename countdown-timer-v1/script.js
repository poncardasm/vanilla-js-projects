const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const mainTitle = document.querySelector('h1');

const newYears = '10 April 2024';

const newYearsDate = new Date(newYears);
const formattedDate = `${newYearsDate.toLocaleString('default', {
  month: 'long',
})} ${newYearsDate.getDate()}, ${newYearsDate.getFullYear()}`;
mainTitle.innerText = `Countdown to ${formattedDate}`;

function countdown() {
  const newYearsDate = new Date(newYears)
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

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

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Initial call so it doesn't start at 00
countdown();

// Update the timer every second
setInterval(countdown, 1000);
