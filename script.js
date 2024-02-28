const openBtn = document.querySelector(".openbtn");
const modelBox = document.querySelector(".model-box");
const closeBtn = document.querySelector(".closebtn");

openBtn.addEventListener("click", () => {
  modelBox.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modelBox.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modelBox) {
    modelBox.style.display = "none";
  }
});
