import { dropDownMenu, hidenMenu } from "./menu.js";
import { initClock } from "./clock.js";
import { initAlarm, stopAlarm } from "./alarm.js";
import { shortcuts } from "./key_events.js";
import { moveBall } from "./key_events.js";
import { countdown } from "./countdown.js";
import { theme } from "./theme.js"

dropDownMenu(
  document.getElementById("menu"),
  document.getElementById("menuIcon"),
  document.getElementById("btnActiveMenu")
);

hidenMenu(
  document.querySelectorAll(".menu__item"),
  document.getElementById("menuIcon"),
  document.getElementById("menu")
);


initClock(
  document.getElementById("btnInitClock"),
  document.getElementById("textTime"),
  document.getElementById("btnStopClock")
);

initAlarm(
  document.getElementById("btnInitAlarm"),
  document.getElementById("audio")
);

stopAlarm(
  document.getElementById("btnInitAlarm"),
  document.getElementById("btnStopAlarm"),
  document.getElementById("audio")
);

shortcuts();

moveBall();

countdown("2021-08-31T16:45:12");

theme(document.getElementById("btnThemeDark"))
