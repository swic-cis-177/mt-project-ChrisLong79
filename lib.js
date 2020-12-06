const tbody = document.querySelector("tbody");
const template = document.querySelector("template");
const form = document.querySelector("form");
const div = document.querySelector("div");

const calcTotal = (order) => {
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

  return [totalQuantity, totalPrice];
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
export const createShoppingCart = (formValues) => {
  const newOrder = processForm(formValues);

  const [quantity, price] = calcTotal(newOrder);
  console.log(quantity, price);
  // TODO: Use the templates to show the quantity and price
  // TODO: Generate an id
  // // Reset the table body b4 adding more stutff
  // tbody.innerHTML = null;

  // shoppingCart.forEach(({ flavor, quantity, total }) => {
  //   const newSalesRow = template.content.cloneNode(true);
  //   const newSalesTDs = newSalesRow.querySelectorAll("td");
  //   newSalesTDs[0].innerText = "id";
  //   newSalesTDs[1].innerText = quantity;
  //   newSalesTDs[2].innerText = total;
  //   tbody.appendChild(newSalesRow);
  // });
};

//what i want form to do.
// allow user to select quantity of smokies by flavor +
//create a const to calculate total for each flavor quantity *10.00
//create a const to properly display id qty and the total into form on click of add to cart button.

// only allow for form to be submitted once.
// calculate grand total below form by adding all the totals together.
