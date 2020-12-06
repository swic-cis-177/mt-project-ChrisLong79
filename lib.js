const tbody = document.querySelector("tbody");
const template = document.querySelector("template");
const form = document.querySelector("form");
const div = document.querySelector("div");

export const createShoppingCart = (salesData) => {
  tbody.innerHTML = null;

  salesData.forEach(({ flavor, quantity, total }) => {
    const newSalesRow = template.content.cloneNode(true);
    const newSalesTDs = newSalesRow.querySelectorAll("td");
    newSalesTDs[0].innerText = flavor;
    newSalesTDs[1].innerText = quantity;
    newSalesTDs[2].innerText = total;
    tbody.appendChild(newSalesRow);
  });
};
