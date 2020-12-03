const tbody = document.querySelector("tbody");
const template = document.querySelector("template");

export const createShoppingCart = (data) => {
  data.forEach(({ flavor, quantity, total }) => {
    const newFlavorRow = template.content.cloneNode(true);
    const newOrderTDs = newFlavorRow.querySelectorAll("td");

    newOrderTDs[0].textContent = flavor;
    newOrderTDs[1].textContent = quantity;
    newOrderTDs[2].textContent = total;
    tbody.appendChild(newFlavorRow);
  });
};
