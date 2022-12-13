import { menu } from "./menu";

const DOMSelectors = {
  button: document.getElementById("btn"),
};

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("lightmode")) {
    document.body.classList.add("darkmode");
    document.body.classList.remove("lightmode");
  } else {
    document.body.classList.add("lightmode");
    document.body.classList.remove("darkmode");
  }
});
