import { menu } from "./menu";

const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("card"),
  bestsellerbtn: document.getElementById("button1"),
  uniquebtn: document.getElementById("button2"),
  vegeterianbtn: document.getElementById("button3"),
  meatbtn: document.getElementById("button4"),
  cheapbtn: document.getElementById("button5"),
  completebtn: document.getElementById("button6"),
  clear: `<div class="card" id="card"></div>`,
};

const Filters = {
  CompleteMenu: menu,
  BestSellerMenu: menu.filter((menu) => menu.BestSeller === "true"),
  UniqueMenu: menu.filter((menu) => menu.Unique === "true"),
  VegeterianMenu: menu.filter((menu) => menu.vegetarian === "true"),
  MeatMenu: menu.filter((menu) => menu.meat === "true"),
  CheapMenu: menu.filter((menu) => menu.PricePerPie < 15),
};
export { DOMSelectors };
export { Filters };
