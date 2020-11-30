export const countdown = (limitDate) => {
  const countdown = document.getElementById("countdown");

  setInterval(() => {
    const millisecondLimits = new Date(limitDate).getTime();
    const currentMillisecond = new Date().getTime();
    const thousandsOfSeconds = millisecondLimits - currentMillisecond;

    const year = Math.floor(thousandsOfSeconds / (365 * 24 * 60 * 60 * 1000));
    const days = Math.floor(
      (thousandsOfSeconds % (365 * 24 * 60 * 60 * 1000)) / (60 * 60 * 1000 * 24)
    );

    const hours = Math.floor(
      ((thousandsOfSeconds % (365 * 24 * 60 * 60 * 1000)) %
        (60 * 60 * 1000 * 24)) /
        (60 * 60 * 1000)
    );

    const minute = Math.floor(
      (((thousandsOfSeconds % (365 * 24 * 60 * 60 * 1000)) %
        (60 * 60 * 1000 * 24)) %
        (60 * 60 * 1000)) /
        (60 * 1000)
    );

    const seconds = Math.floor(
      ((((thousandsOfSeconds % (365 * 24 * 60 * 60 * 1000)) %
        (60 * 60 * 1000 * 24)) %
        (60 * 60 * 1000)) %
        (60 * 1000)) /
        1000
    );

    countdown.innerHTML = `Faltan ${year} año(s) ${days} dia(s) ${hours} hora(s) ${minute} minuto(s) ${seconds} segundo(s) `;
  }, 1000);
};
