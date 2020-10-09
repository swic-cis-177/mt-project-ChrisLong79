const form = document.querySelector("form");

form.addEventListener("submit", () => {
  event.preventDefault();

  const formData = {};
  for (let i = 0; i <= 4; i++) {
    formData[event.target.elements[i].id] = event.target.elements[i].value;
    formData[event.target.elements[i].id] = event.target.elements[i].value;
  }
  console.log(formData);
});
