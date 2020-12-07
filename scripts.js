import { calcShoppingCart } from "./lib.js";

const form = document.querySelector("form");
const orders = [];

//Listen for the submit event
form.addEventListener("submit", () => {
  //Block default handling of the submit action
  event.preventDefault();

  const newOrder = calcShoppingCart(event.target.elements);

  // TODO: Send totalQty, totalPrice to update the table
});
