export const initClock = (btnInit, textTime, btnStop) => {
  btnInit.addEventListener("click", () => {
    const clock = setInterval(() => {
      let time = new Date().toLocaleTimeString();
      textTime.textContent = time;
      stopClock(btnInit, btnStop, clock, textTime);
    }, 1000);
    btnInit.setAttribute("disabled", "true");
  });
};

const stopClock = (btnInit, btnStop, sto, textTime) => {
  btnStop.addEventListener("click", () => {
    clearInterval(sto);
    btnInit.removeAttribute("disabled");
    textTime.textContent = "";
  });
};
