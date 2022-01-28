"use strict";
const pomidoroTimer = () => {
  const minutes = document.getElementById("minutes"),
    seconds = document.getElementById("seconds"),
    time = document.getElementById("time"),
    body = document.querySelector("body"),
    start = document.getElementById("stsp");
  let idInterval;
  let timeMinute = +minutes.textContent * 60;
  const zeroFormat = (number) => {
    if (number < 10) {
      number = "0" + number;
    }
    return number;
  };
  const settingsTimer = () => {
    const second = timeMinute % 60,
      minute = timeMinute / 60;
    if (timeMinute >= 0) {
      seconds.textContent = zeroFormat(Math.floor(second));
      minutes.textContent = zeroFormat(Math.floor(minute));
      timeMinute--;
    } else {
      stopTimer();
      defoultStyle();
    }
  };
  const startTimer = () => {
    idInterval = setInterval(settingsTimer, 1000);
  };
  const stopTimer = () => {
    clearInterval(idInterval);
  };
  const defoultStyle = () => {
    seconds.style.color = "red";
    minutes.style.color = "red";
  };
  const startStyle = () => {
    seconds.style.color = "white";
    minutes.style.color = "white";
  };
  start.addEventListener("click", () => {
    timeMinute = +minutes.textContent * 60;
    startStyle();
    settingsTimer();
    startTimer();
  });
  time.addEventListener("click", (e) => {
    const target = e.target;
    stopTimer();
  });
};
pomidoroTimer();
