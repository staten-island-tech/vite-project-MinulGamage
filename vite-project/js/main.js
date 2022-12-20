import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { DOMSelectors } from "./DOM";

AOS.init();
import { menu } from "./menu";

/* document.getElementById("#app").insertAdjacentHTML(
  "afterend,"`<div class="card">
<h3>${menu.name}</h3>
<img src="${menu.img}"/>
<p class="PricePerPie">Price Per Pie: ${menu.PricePerPie}</p>
<p class="PricePerSlice">Price Per Slice: ${menu.PricePerSlice}</p>
</div>`
); */

/* document.querySelector("#app").innerHTML = `
<div class="card">
<h3>${menu.name}</h3>
<img src="${menu.img}"/>
<p class="PricePerPie">Price Per Pie: ${menu.PricePerPie}</p>
<p class="PricePerSlice">Price Per Slice: ${menu.PricePerSlice}</p>
</div>`;
 */
menu.forEach((menu) => {
  DOMSelectors.box.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="card">
   <h2 class="item">${menu.name}</h2>
   <div class="img-container">
   <img src="${menu.img}"
   alt="" class="menu-img">
   </div>
   <h3 class="PricePerPie"> ${menu.PricePerPie}</h3>
   <h3 class="PricePerSlice">${menu.PricePerSlice}</h3>
   </div>`
  );
});

console.log(menu);

DOMSelectors.button.addEventListener("click", function () {
  if (document.body.classList.contains("lightmode")) {
    document.body.classList.add("darkmode");
    document.body.classList.remove("lightmode");
  } else {
    document.body.classList.add("lightmode");
    document.body.classList.remove("darkmode");
  }
});
