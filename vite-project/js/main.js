import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { DOMSelectors } from "./DOM";

AOS.init();
import { menu } from "./menu";

document.querySelector("#app").innerHTML = `<div class="parent">
<p>${menu.name}</p>
<img src="${menu.img}"/>
<p class="PricePerPie">Price Per Pie:${menu.PricePerPie}</p>
<p class="PricePerSlice">Price Per Slice:${menu.PricePerSlice}</p>
</div>`;

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
