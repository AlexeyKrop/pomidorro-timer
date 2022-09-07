"use strict";
const pomidoroTimer = () => {
  const minutes = document.getElementById("minutes"),
    seconds = document.getElementById("seconds"),
    timer = document.querySelector(".timer"),
    dropdown = document.getElementById("dropdown"),
    start = document.getElementById("start"),
    stop = document.getElementById("stop"),
    reset = document.getElementById("reset"),
    body = document.querySelector("body");
  minutes.addEventListener("input", (e) => {
    const target = e.target;
    validationSettings(target);
  });
  seconds.addEventListener("input", (e) => {
    const target = e.target;
    validationSettings(target);
  });
  let idInterval;
  let timeSecond = +minutes.textContent * 60 + +seconds.textContent;
  const validationSettings = (el) => {
    el.textContent = el.textContent.replace(
      /[А-Яа-яЁё\A-Za-z\!"№;%:?*()+.,@#$%^&":_\ ]/,
      ""
    );
    if (!el.textContent.search(/[0-9]{3}/)) el.textContent = "";
  };
  const zeroFormat = (number) => {
    if (number < 10) {
      number = "0" + number;
    }
    return number;
  };
  const settingsTimer = () => {
    const second = timeSecond % 60,
      minute = timeSecond / 60;
    if (timeSecond >= 0) {
      seconds.textContent = zeroFormat(Math.floor(second));
      minutes.textContent = zeroFormat(Math.floor(minute));
      timeSecond--;
    } else {
      stopTimer();
      basicStyleSettings();
    }
  };
  const startTimer = () => {
    start.disabled = true;
    idInterval = setInterval(settingsTimer, 1000);
  };
  const stopTimer = () => {
    start.disabled = false;
    clearInterval(idInterval);
  };
  const resetTimer = () => {
    clearInterval(idInterval);
    seconds.textContent = "00";
    minutes.textContent = "00";
    basicStyleSettings();
  };
  const basicStyleSettings = () => {
    seconds.style.color = "red";
    minutes.style.color = "red";
  };
  const timerStyleSettings = () => {
    seconds.style.color = "white";
    minutes.style.color = "white";
  };
  body.addEventListener("click", (e) => {
    const target = e.target;
    if (target.matches("#start")) {
      timeSecond = +minutes.textContent * 60 + +seconds.textContent;
      if (minutes.textContent === "00" && seconds.textContent === "00") {
        const el = document.createElement("div");
        el.textContent = "Введите время";
        el.style.cssText = `position: absolute;
                          top: 30%;
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
    }
    if (!target.matches("#start")) {
      stopTimer();
    }
    if (target.matches("#stop")) {
      stopTimer();
    }
    if (target.matches("#reset")) {
      resetTimer();
    }
  });
  const styleForTheme = (value) => {
    if (+value === 0) {
      body.classList.remove("wrapper__forest");
      body.classList.remove("wrapper__ocean");
    }
    if (+value === 1) {
      body.classList.remove("wrapper__forest");
      body.classList.add("wrapper__ocean");
    }
    if (+value === 2) {
      body.classList.remove("wrapper__ocean");
      body.classList.add("wrapper__forest");
    }
    start.classList.toggle("btn-animation");
    stop.classList.toggle("btn-animation");
    reset.classList.toggle("btn-animation");
    dropdown.style.opacity = 0.4;
  };
  dropdown.addEventListener("change", (e) => {
    const target = e.currentTarget;
    styleForTheme(target.value);
  });
};
pomidoroTimer();
