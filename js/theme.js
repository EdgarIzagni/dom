export const theme = (btnActive) => {
  btnActive.addEventListener("click", () => {
    const body = document.querySelector("body")
    body.classList.toggle("body__themeDark")
  });
};
