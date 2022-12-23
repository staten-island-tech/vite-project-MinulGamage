import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { DOMSelectors } from "./DOM";

const theme = DOMSelectors.button.addEventListener("click", function () {
  if (document.body.classList.contains("lightmode")) {
    document.body.classList.add("darkmode");
    document.body.classList.remove("lightmode");
  } else {
    document.body.classList.add("lightmode");
    document.body.classList.remove("darkmode");
  }
});

const bestseller = DOMSelectors.bestseller.addEventListener(
  "click",
  function removeCards() {
    DOMSelectors.card.innerHTML = DOMSelectors.clear;
  }
);

export { theme };
export { bestseller };
