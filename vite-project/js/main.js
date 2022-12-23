import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { DOMSelectors } from "./DOM";
import { Filters } from "./DOM";
import { theme } from "./index";
AOS.init();
import { menu } from "./menu";

function cardCreator(x) {
  x.forEach((menu) => {
    DOMSelectors.box.insertAdjacentHTML(
      "afterbegin",
      `
    <div class="menu-card" data-aos="flip-up">
   <h2 class="item">${menu.name}</h2>
   <div class="img-container">
   <img src="${menu.img}"
   alt="" class="menu-img">
   </div>
   <h3 class="PricePerPie"> Price Per Pie: $${menu.PricePerPie}</h3>
   <h3 class="PricePerSlice"> Price Per Slice: $${menu.PricePerSlice}</h3>
   <button> Order Online </button>
   </div>`
    );
  });
}
/* menu
  .filter((bestseller) => menu.BestSeller === "true")
  .forEach((bestseller) => {
    DOMSelectors.box.insertAdjacentHTML(
      "afterbegin",
      `
    <div class="menu-card" data-aos="flip-up">
   <h2 class="item">${menu.name}</h2>
   <div class="img-container">
   <img src="${menu.img}"
   alt="" class="menu-img">
   </div>
   <h3 class="PricePerPie"> Price Per Pie: $${menu.PricePerPie}</h3>
   <h3 class="PricePerSlice"> Price Per Slice: $${menu.PricePerSlice}</h3>
   <button> Order Online </button>
   </div>`
    );
  });
 */
console.log(menu);

export { cardCreator };
