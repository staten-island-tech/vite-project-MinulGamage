import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { DOMSelectors } from "./DOM";
import { cardCreator } from "./main";
import { Filters } from "./DOM";
import { menu } from "./menu";

const theme = DOMSelectors.button.addEventListener("click", function () {
  if (document.body.classList.contains("lightmode")) {
    document.body.classList.add("darkmode");
    document.body.classList.remove("lightmode");
  } else {
    document.body.classList.add("lightmode");
    document.body.classList.remove("darkmode");
  }
});

/* const bestseller = DOMSelectors.bestseller.addEventListener(
  "click",
  function removeCards() {
    DOMSelectors.card.innerHTML = DOMSelectors.clear;
  }
);
 */
function removeCards() {
  DOMSelectors.box.innerHTML = DOMSelectors.clear;
}

DOMSelectors.cheapbtn.addEventListener("click", function (event) {
  removeCards();
  cardCreator(Filters.CheapMenu);
});

cardCreator(menu);

DOMSelectors.bestsellerbtn.addEventListener("click", function (event) {
  removeCards();
  cardCreator(Filters.BestSellerMenu);
});

DOMSelectors.uniquebtn.addEventListener("click", function (event) {
  removeCards();
  cardCreator(Filters.UniqueMenu);
});

DOMSelectors.completebtn.addEventListener("click", function (event) {
  removeCards();
  cardCreator(Filters.CompleteMenu);
});

DOMSelectors.vegeterianbtn.addEventListener("click", function (event) {
  removeCards();
  cardCreator(Filters.VegeterianMenu);
});

DOMSelectors.meatbtn.addEventListener("click", function (event) {
  removeCards();
  cardCreator(Filters.MeatMenu);
});

export { theme };
