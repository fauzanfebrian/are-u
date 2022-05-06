const btnRed = document.querySelector("button.red");
const btnGreen = document.querySelector("button.green");
const head = document.querySelector(".head");
const headText = document.querySelector(".head h1");
const bottom = document.querySelector(".bottom");

btnRed.addEventListener("click", () => {
  head.classList.add("active");
  bottom.classList.add("disabled");
  headText.innerText = "I KNEW IT!!!";
});

btnGreen.addEventListener("click", () => {
  btnGreen.style.transform = `translateY(${
    Math.floor(Math.random() * 2) ? "" : "-"
  }${Math.floor(Math.random() * 75)}px)`;
});
