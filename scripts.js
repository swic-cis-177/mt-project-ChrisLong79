const form = document.querySelector("form");

form.addEventListener("submit", () => {
  event.preventDefault();
  console.log(event.target.elements[0].value);
});

//DO When clicked have it return a box saying "name" has "#" beef and "#" hogs scheduled for "date"
