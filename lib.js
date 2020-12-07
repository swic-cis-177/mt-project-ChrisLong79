const tbody = document.querySelector("tbody");
const template = document.querySelector("template");
const form = document.querySelector("form");
const div = document.querySelector("div");

// TODO: create const to have unit price =10.00 for each id
const unitPrice = 10.0;

// TODO: create const Total to multiply unit price by qty in input box.
// TODO: create const grandTotal that adds all Totals up and have it displayed in H3  "total $" grandTotal.
// flavor = id ,quantity= id.value, unit price=const unitPrice , total=const total

// fix code in createShoppingCart
export const createShoppingCart = (shoppingCart) => {
  tbody.innerHTML = null;

  shoppingCart.forEach(({ flavor, quantity, total }) => {
    const newSalesRow = template.content.cloneNode(true);
    const newSalesTDs = newSalesRow.querySelectorAll("td");
    newSalesTDs[0].innerText = "id";
    newSalesTDs[1].innerText = quantity;
    newSalesTDs[2].innerText = total;
    tbody.appendChild(newSalesRow);
  });
};

const processForm = (elements) =>
  Array.from(elements)
    .filter(({ id }) => id)
    .reduce(
      (formInfo, { id, value }) => ({
        ...formInfo,
        [id]: value,
      }),
      {}
    );

//what i want form to do.
// allow user to select quantity of smokies by flavor +
//create a const to calculate total for each flavor quantity *10.00
//create a const to properly display id qty and the total into form on click of add to cart button.

// only allow for form to be submitted once.
// calculate grand total below form by adding all the totals together.
