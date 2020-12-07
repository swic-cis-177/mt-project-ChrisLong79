import { createShoppingCart } from "./lib.js";

const form = document.querySelector("form");
form.addEventListener("submit", () => {
  //Block default handling of the submit action
  event.preventDefault();
  //Declare a variable for the form data
  const formData = {};
  //Create loop to display data from form
  for (let i = 0; i <= 6; i++) {
    formData[event.target.elements[i].id] = event.target.elements[i].value;
  }
  //Log the formData to console (the id and value form the inputs)

  console.log(formData);
});

const render = (shoppingCart) => {
  createShoppingCart(shoppingCart);
};

render();
