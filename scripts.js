const form = document.querySelector("form");

form.addEventListener("submit", () => {
  event.preventDefault();

  const data = {};
  for (let i = 0; i <= 4; i++) {
    data[event.target.elements[i].id] = event.target.elements[i].value;
    console.log(data);
  }
});

// phone # event.target.elements[1].value)
// beef # event.target.elements[2].value)
// hog # event.target.elements[3].value)
// date event.target.elements[4].value)
