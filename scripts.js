import { calcShoppingCart } from "./lib.js";

const orders = [];

const form = document.querySelector("form");
form.addEventListener("submit", () => {
  event.preventDefault();

  const newOrder = calcShoppingCart(event.target.elements);
  console.log(newOrder);
  // TODO: Send totalQty, totalPrice to update the table
});

//const render = (newOrder) => {
//calcShoppingCart(newOrder);
//};

//render();
