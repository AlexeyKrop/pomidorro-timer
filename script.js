"use strcit";
const minutes = document.getElementById("minutes"),
  seconds = document.getElementById("seconds");
let timeMinute = minutes.textContent * 60;
setInterval(() => {
  const second = timeMinute % 60,
    minute = (timeMinute / 60) % 60;
  seconds.innerHTML = Math.floor(second);
  minutes.innerHTML = Math.floor(minute);
  timeMinute--;
}, 1000);
