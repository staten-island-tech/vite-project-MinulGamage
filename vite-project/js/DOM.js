import { menu } from "./menu";

const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("card"),
  bestseller: document.getElementById("button1"),
  unique: document.getElementById("button2"),
  vegeterian: document.getElementById("button3"),
  meat: document.getElementById("button4"),
  cheap: document.getElementById("button5"),
  complete: document.getElementById("button6"),
  clear: `<div class="card" id="card"></div>`,
};

export { DOMSelectors };
