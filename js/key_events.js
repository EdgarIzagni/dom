export const shortcuts = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "a" && e.altKey) {
      alert("Ha selecionado una alerta");
    }
    if (e.key === "c" && e.altKey) {
      confirm("Ha selecionado una confirmacion");
    }
    if (e.key === "p" && e.altKey) {
      prompt("Ha selecionado un prompt");
    }
  });
};

export const moveBall = () => {
  const circle = document.getElementById("circle");
  const stage = document.getElementById("stage");
  let x = 0,
    y = 0;
  document.addEventListener("keydown", (e) => {
    const descriptionCircle = circle.getBoundingClientRect();
    const descriptionStage = stage.getBoundingClientRect();
    switch (e.keyCode) {
      case 37:
        if (descriptionCircle.left > descriptionStage.left + 8) x--;
        break;
      case 38:
        if (descriptionCircle.top > descriptionStage.top) y--;
        e.preventDefault();
        break;
      case 39:
        if (descriptionCircle.right < descriptionStage.right - 8) x++;
        break;
      case 40:
        if (descriptionCircle.bottom < descriptionStage.bottom) y++;
        e.preventDefault();
        break;
      default:
        break;
    }
    circle.style.transform = `translate(${10 * x}px,${10 * y}px) `;
  });
};
