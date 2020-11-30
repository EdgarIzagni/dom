export const dropDownMenu = (menu, imgBtn, btn) => {
  btn.addEventListener("click", () => {
    menu.classList.toggle("menu__animate");
    if (menu.classList.length != 2) {
      imgBtn.setAttribute("src", "./assets/img/menu.png");
    } else {
      imgBtn.setAttribute("src", "./assets/img/cerrar.png");
    }
  });
};

export const hidenMenu = (links, imgBtn, menu) => {
  for (const link of links) {
    link.addEventListener("click", () => {
      menu.classList.remove("menu__animate");
      imgBtn.setAttribute("src", "./assets/img/menu.png");
    });
  }
};
