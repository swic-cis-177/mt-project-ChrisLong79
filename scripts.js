import { calcShoppingCart } from "./lib.js";

const orders = [];

const form = document.querySelector("form");
form.addEventListener("submit", () => {
  event.preventDefault();

  const newOrder = calcShoppingCart(event.target.elements);

  // TODO: Send totalQty, totalPrice to update the table
});

//const render = (newOrder) => {
//renderTable(newOrder);
//};

//render();
