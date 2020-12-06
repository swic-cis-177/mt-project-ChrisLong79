import { createShoppingCart } from "./lib.js";

const form = document.querySelector("form");

//Listen for the submit event
form.addEventListener("submit", () => {
  //Block default handling of the submit action
  event.preventDefault();

  console.log(createShoppingCart(event.target.elements));
});
