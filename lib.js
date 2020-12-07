const tbody = document.querySelector("tbody");
const template = document.querySelector("template");
const form = document.querySelector("form");
const div = document.querySelector("div");

const calcTotals = (order) => {
  const unitPrice = 10.0;

  // Get all of the values only from the order
  const quantities = Object.values(order);

  //  Total up all of the quantities that are in that Array of quantities
  const totalQuantity = quantities.reduce((total, quantity) => {
    // Keep adding the quantities as numbers
    total += Number(quantity);
    return total;
  }, 0);

  const totalPrice = totalQuantity * unitPrice;

  return { totalPrice, totalQuantity };
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

// fix code in createShoppingCart
export const calcShoppingCart = (formValues) => {
  const newOrder = processForm(formValues);

  // TODO: Generate an id and include it with the order

  return calcTotals(newOrder);

  // TODO: Use the templates to show the quantity and price
  // TODO: Generate an id
  // // Reset the table body b4 adding more stutff
  //export const displayData = (orderDetails) => {

  //tbody.innerHTML = null;

  //displayData.forEach(({ flavor, quantity, total }) => {
  //const newSalesRow = template.content.cloneNode(true);
  //const newSalesTDs = newSalesRow.querySelectorAll("td");
  //newSalesTDs[0].innerText = "id";
  //newSalesTDs[1].innerText = totalQuantity;
  // newSalesTDs[2].innerText = totalPrice;
  //tbody.appendChild(newSalesRow);
  //});
  //};

  //export const renderTable = (orders) => {
  // TODO: Use the template to show each order in a new row
};

//what i want form to do.
// allow user to select quantity of smokies by flavor +
//create a const to calculate total for each flavor quantity *10.00
//create a const to properly display id qty and the total into form on click of add to cart button.

// only allow for form to be submitted once.
// calculate grand total below form by adding all the totals together.
