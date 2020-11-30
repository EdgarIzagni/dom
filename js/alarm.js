export const initAlarm = (btnInit, audio) => {
  btnInit.addEventListener("click", () => {
    btnInit.setAttribute("disabled", "true");
    audio.play();
  });
};

export const stopAlarm = (btnInit, btnStop, audio) => {
  btnStop.addEventListener("click", () => {
    audio.pause();
    btnInit.removeAttribute("disabled");
  });
};
