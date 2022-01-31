"use strict";
const pomidoroTimer = () => {
  const minutes = document.getElementById("minutes"),
    seconds = document.getElementById("seconds"),
    timer = document.querySelector(".timer"),
    body = document.querySelector("body"),
    start = document.getElementById("start"),
    stop = document.getElementById("stop");
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
      basicStyleSettings();
    }
  };
  const startTimer = () => {
    idInterval = setInterval(settingsTimer, 1000);
  };
  const stopTimer = () => {
    clearInterval(idInterval);
  };
  const basicStyleSettings = () => {
    seconds.style.color = "red";
    minutes.style.color = "red";
  };
  const timerStyleSettings = () => {
    seconds.style.color = "white";
    minutes.style.color = "white";
  };
  start.addEventListener("click", () => {
    timeMinute = +minutes.textContent * 60;
    if (minutes.textContent === "00" && seconds.textContent === "00") {
      const el = document.createElement("div");
      el.textContent = "Введите время";
      el.style.cssText = `position: absolute;
                          top: 25%;
                          font-size: 25px;
                          color: #90EE90;`;
      setTimeout(() => {
        if (el) {
          el.remove();
        }
      }, 2000);
      timer.append(el);
      return;
    }
    timerStyleSettings();
    settingsTimer();
    startTimer();
  });

  body.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.matches("#start")) {
      stopTimer();
    }
  });
  stop.addEventListener("click", (e) => {
    stopTimer();
  });
};
pomidoroTimer();
