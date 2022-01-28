"use strict";
const pomidoroTimer = () => {
  const minutes = document.getElementById("minutes"),
    seconds = document.getElementById("seconds"),
    time = document.getElementById("time");
  let timeMinute = minutes.textContent * 60;
  const zeroFormat = (number) => {
    if (number < 10) {
      number = "0" + number;
    }
    return number;
  };
  const startTimer = () => {
    const second = timeMinute % 60,
      minute = (timeMinute / 60) % 60;
    if (timeMinute >= 0) {
      seconds.textContent = zeroFormat(Math.floor(second));
      minutes.textContent = zeroFormat(Math.floor(minute));
      timeMinute--;
    } else {
      stopTimer();
      defoultStyle();
    }
  };
  let idInterval = setInterval(startTimer, 1000);
  const stopTimer = () => {
    clearInterval(idInterval);
  };
  const defoultStyle = () => {
    seconds.style.color = "red";
    minutes.style.color = "red";
  };
  const getEdit = () => {
    time.addEventListener("click", (event) => {
      const target = event.target;
      minutes.contentEditable = true;
      stopTimer();
    });
  };
  getEdit();
};
pomidoroTimer();
